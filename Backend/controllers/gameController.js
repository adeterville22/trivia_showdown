const GameSession = require('../models/GameSession');
const Question = require('../models/Question');
const { v4: uuidv4 } = require('uuid');

// @desc    Create a new game session
// @route   POST /api/games
// @access  Public
const createGameSession = async (req, res) => {
  try {
    const { playerNames, totalQuestions = 15, category, difficulty } = req.body;

    if (!playerNames || !Array.isArray(playerNames) || playerNames.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Player names array is required'
      });
    }

    // Build query for questions
    let query = { type: 'multiple' };
    if (category && category !== 'all') query.category = category;
    if (difficulty) query.difficulty = difficulty;

    // Get random questions
    const questions = await Question.aggregate([
      { $match: query },
      { $sample: { size: parseInt(totalQuestions) } },
      { $project: { correctAnswer: 0, explanation: 0 } } // Exclude answers initially
    ]);

    if (questions.length < totalQuestions) {
      return res.status(400).json({
        success: false,
        message: `Not enough questions available. Only ${questions.length} found.`
      });
    }

    // Create game session
    const gameSession = new GameSession({
      sessionId: uuidv4(),
      players: playerNames.map(name => ({ name, score: 0, answers: [] })),
      questions: questions.map(q => q._id),
      totalQuestions: parseInt(totalQuestions),
      status: 'active'
    });

    await gameSession.save();

    // Get first question with shuffled options
    const firstQuestion = await Question.findById(questions[0]._id);
    const currentQuestion = {
      _id: firstQuestion._id,
      category: firstQuestion.category,
      difficulty: firstQuestion.difficulty,
      type: firstQuestion.type,
      question: firstQuestion.question,
      options: shuffleArray([
        firstQuestion.correctAnswer,
        ...firstQuestion.incorrectAnswers
      ])
    };

    res.status(201).json({
      success: true,
      data: {
        sessionId: gameSession.sessionId,
        players: gameSession.players,
        currentQuestion,
        currentPlayer: gameSession.players[0].name,
        currentQuestionIndex: 0,
        totalQuestions: gameSession.totalQuestions,
        status: gameSession.status
      }
    });
  } catch (error) {
    console.error('Error creating game session:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating game session',
      error: error.message
    });
  }
};

// @desc    Submit answer for current player
// @route   POST /api/games/:sessionId/answer
// @access  Public
const submitAnswer = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { playerName, answer } = req.body;

    if (!playerName || !answer) {
      return res.status(400).json({
        success: false,
        message: 'Player name and answer are required'
      });
    }

    const gameSession = await GameSession.findOne({ sessionId }).populate('questions');
    
    if (!gameSession) {
      return res.status(404).json({
        success: false,
        message: 'Game session not found'
      });
    }

    if (gameSession.status !== 'active') {
      return res.status(400).json({
        success: false,
        message: 'Game session is not active'
      });
    }

    // Verify it's the correct player's turn
    const currentPlayer = gameSession.players[gameSession.currentPlayerIndex];
    if (currentPlayer.name !== playerName) {
      return res.status(400).json({
        success: false,
        message: `It's not ${playerName}'s turn. Current player: ${currentPlayer.name}`
      });
    }

    const currentQuestion = gameSession.questions[gameSession.currentQuestionIndex];
    
    // Check if answer is correct
    const isCorrect = currentQuestion.correctAnswer === answer;

    // Update player's answer and score
    const playerIndex = gameSession.players.findIndex(p => p.name === playerName);
    gameSession.players[playerIndex].answers.push({
      questionId: currentQuestion._id,
      userAnswer: answer,
      isCorrect: isCorrect
    });

    if (isCorrect) {
      gameSession.players[playerIndex].score += 1;
    }

    // Move to next player or next question
    let nextPlayerIndex = gameSession.currentPlayerIndex + 1;
    let nextQuestionIndex = gameSession.currentQuestionIndex;

    if (nextPlayerIndex >= gameSession.players.length) {
      // All players have answered this question, move to next question
      nextPlayerIndex = 0;
      nextQuestionIndex += 1;
    }

    // Check if game is completed
    if (nextQuestionIndex >= gameSession.totalQuestions) {
      gameSession.status = 'completed';
      gameSession.completedAt = new Date();
      
      await gameSession.save();

      // Calculate winner
      const winner = gameSession.players.reduce((prev, current) => 
        (prev.score > current.score) ? prev : current
      );

      return res.json({
        success: true,
        data: {
          sessionId: gameSession.sessionId,
          status: 'completed',
          players: gameSession.players,
          winner: {
            name: winner.name,
            score: winner.score
          },
          message: `🏆 ${winner.name} wins with ${winner.score} points!`
        }
      });
    }

    // Update game state
    gameSession.currentPlayerIndex = nextPlayerIndex;
    gameSession.currentQuestionIndex = nextQuestionIndex;
    await gameSession.save();

    // Get next question with shuffled options
    const nextQuestionDoc = await Question.findById(gameSession.questions[nextQuestionIndex]);
    const nextQuestion = {
      _id: nextQuestionDoc._id,
      category: nextQuestionDoc.category,
      difficulty: nextQuestionDoc.difficulty,
      type: nextQuestionDoc.type,
      question: nextQuestionDoc.question,
      options: shuffleArray([
        nextQuestionDoc.correctAnswer,
        ...nextQuestionDoc.incorrectAnswers
      ])
    };

    res.json({
      success: true,
      data: {
        sessionId: gameSession.sessionId,
        players: gameSession.players,
        currentQuestion: nextQuestion,
        currentPlayer: gameSession.players[nextPlayerIndex].name,
        currentQuestionIndex: nextQuestionIndex,
        totalQuestions: gameSession.totalQuestions,
        status: gameSession.status,
        previousAnswer: {
          player: playerName,
          question: currentQuestion.question,
          userAnswer: answer,
          isCorrect: isCorrect
        }
      }
    });
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting answer',
      error: error.message
    });
  }
};

// @desc    Get current game state
// @route   GET /api/games/:sessionId
// @access  Public
const getGameState = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const gameSession = await GameSession.findOne({ sessionId }).populate('questions');
    
    if (!gameSession) {
      return res.status(404).json({
        success: false,
        message: 'Game session not found'
      });
    }

    // If game is completed, return final results
    if (gameSession.status === 'completed') {
      const winner = gameSession.players.reduce((prev, current) => 
        (prev.score > current.score) ? prev : current
      );

      return res.json({
        success: true,
        data: {
          sessionId: gameSession.sessionId,
          status: 'completed',
          players: gameSession.players,
          winner: {
            name: winner.name,
            score: winner.score
          },
          message: `🏆 ${winner.name} wins with ${winner.score} points!`
        }
      });
    }

    // Get current question with shuffled options
    const currentQuestionDoc = await Question.findById(
      gameSession.questions[gameSession.currentQuestionIndex]
    );
    
    const currentQuestion = {
      _id: currentQuestionDoc._id,
      category: currentQuestionDoc.category,
      difficulty: currentQuestionDoc.difficulty,
      type: currentQuestionDoc.type,
      question: currentQuestionDoc.question,
      options: shuffleArray([
        currentQuestionDoc.correctAnswer,
        ...currentQuestionDoc.incorrectAnswers
      ])
    };

    res.json({
      success: true,
      data: {
        sessionId: gameSession.sessionId,
        players: gameSession.players,
        currentQuestion,
        currentPlayer: gameSession.players[gameSession.currentPlayerIndex].name,
        currentQuestionIndex: gameSession.currentQuestionIndex,
        totalQuestions: gameSession.totalQuestions,
        status: gameSession.status
      }
    });
  } catch (error) {
    console.error('Error getting game state:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting game state',
      error: error.message
    });
  }
};

// @desc    Get game results
// @route   GET /api/games/:sessionId/results
// @access  Public
const getGameResults = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const gameSession = await GameSession.findOne({ sessionId })
      .populate('questions')
      .populate('players.answers.questionId');
    
    if (!gameSession) {
      return res.status(404).json({
        success: false,
        message: 'Game session not found'
      });
    }

    if (gameSession.status !== 'completed') {
      return res.status(400).json({
        success: false,
        message: 'Game is not completed yet'
      });
    }

    // Calculate winner and detailed results
    const winner = gameSession.players.reduce((prev, current) => 
      (prev.score > current.score) ? prev : current
    );

    // Get questions with correct answers for detailed results
    const detailedQuestions = await Promise.all(
      gameSession.questions.map(async (questionId) => {
        const question = await Question.findById(questionId);
        return {
          _id: question._id,
          question: question.question,
          correctAnswer: question.correctAnswer,
          explanation: question.explanation
        };
      })
    );

    res.json({
      success: true,
      data: {
        sessionId: gameSession.sessionId,
        players: gameSession.players,
        questions: detailedQuestions,
        winner: {
          name: winner.name,
          score: winner.score
        },
        message: `🏆 ${winner.name} wins with ${winner.score} points!`
      }
    });
  } catch (error) {
    console.error('Error getting game results:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting game results',
      error: error.message
    });
  }
};
// @desc    Get global leaderboard with all players and their scores
// @route   GET /api/games/leaderboard/global
// @access  Public
const getGlobalLeaderboard = async (req, res) => {
  try {
    // Aggregate all players from all completed game sessions
    const leaderboardData = await GameSession.aggregate([
      { $match: { status: 'completed' } }, // Only completed games
      { $unwind: '$players' }, // Deconstruct the players array
      {
        $group: {
          _id: '$players.name',
          totalScore: { $sum: '$players.score' },
          gamesPlayed: { $sum: 1 },
          bestScore: { $max: '$players.score' },
          averageScore: { $avg: '$players.score' },
          lastPlayed: { $max: '$completedAt' }
        }
      },
      { 
        $project: {
          name: '$_id',
          totalScore: 1,
          gamesPlayed: 1,
          bestScore: 1,
          averageScore: { $round: ['$averageScore', 2] },
          lastPlayed: 1,
          _id: 0
        }
      },
      { $sort: { totalScore: -1 } }, // Sort by total score descending
      { $limit: 100 } // Limit to top 100 players
    ]);

    res.json({
      success: true,
      data: {
        leaderboard: leaderboardData,
        totalPlayers: leaderboardData.length,
        lastUpdated: new Date()
      }
    });
  } catch (error) {
    console.error('Error getting global leaderboard:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting global leaderboard',
      error: error.message
    });
  }
};

// @desc    Get session-specific leaderboard
// @route   GET /api/games/leaderboard/session/:sessionId
// @access  Public
const getSessionLeaderboard = async (req, res) => {
  try {
    const { sessionId } = req.params;

    const gameSession = await GameSession.findOne({ sessionId });
    
    if (!gameSession) {
      return res.status(404).json({
        success: false,
        message: 'Game session not found'
      });
    }

    // Sort players by score for the session
    const sortedPlayers = [...gameSession.players].sort((a, b) => b.score - a.score);

    res.json({
      success: true,
      data: {
        sessionId: gameSession.sessionId,
        players: sortedPlayers,
        totalQuestions: gameSession.totalQuestions,
        status: gameSession.status,
        completedAt: gameSession.completedAt
      }
    });
  } catch (error) {
    console.error('Error getting session leaderboard:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting session leaderboard',
      error: error.message
    });
  }
};

// @desc    Get recent sessions leaderboard
// @route   GET /api/games/leaderboard/recent
// @access  Public
const getRecentSessionsLeaderboard = async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const recentSessions = await GameSession.find({ 
      status: 'completed' 
    })
    .sort({ completedAt: -1 })
    .limit(parseInt(limit))
    .select('sessionId players totalQuestions completedAt');

    // Format the data to include session info with sorted players
    const formattedSessions = recentSessions.map(session => ({
      sessionId: session.sessionId,
      completedAt: session.completedAt,
      totalQuestions: session.totalQuestions,
      players: session.players.sort((a, b) => b.score - a.score)
    }));

    res.json({
      success: true,
      data: {
        sessions: formattedSessions,
        totalSessions: formattedSessions.length
      }
    });
  } catch (error) {
    console.error('Error getting recent sessions leaderboard:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting recent sessions leaderboard',
      error: error.message
    });
  }
};
// Helper function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

module.exports = {
  createGameSession,
  submitAnswer,
  getGameState,
  getGameResults,
  getSessionLeaderboard,
  getRecentSessionsLeaderboard,
  getGlobalLeaderboard
};
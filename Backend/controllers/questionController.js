// controllers/questionController.js
const Question = require('../models/Question');

// @desc    Get all questions with filters
// @route   GET /api/questions
// @access  Public
const getQuestions = async (req, res) => {
  try {
    const { 
      category, 
      difficulty, 
      limit = 10, 
      type = 'multiple',
      excludeAnswers = 'true' 
    } = req.query;

    // Build query object
    let query = {};
    if (category && category !== 'all') query.category = category;
    if (difficulty) query.difficulty = difficulty;
    if (type) query.type = type;

    // Convert limit to number
    const questionLimit = parseInt(limit);
    
    // Field selection - exclude answers by default
    let fieldSelection = '-correctAnswer -explanation';
    if (excludeAnswers === 'false') {
      fieldSelection = ''; // Include all fields
    }

    const questions = await Question.find(query)
      .select(fieldSelection)
      .limit(questionLimit > 50 ? 50 : questionLimit) // Max 50 questions
      .lean(); // Convert to plain JavaScript objects

    // Shuffle options for each question (if not excluding answers)
    if (excludeAnswers === 'false') {
      questions.forEach(question => {
        question.options = shuffleArray([
          question.correctAnswer,
          ...question.incorrectAnswers
        ]);
      });
    }

    res.json({
      success: true,
      count: questions.length,
      data: questions
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching questions',
      error: error.message
    });
  }
};

// @desc    Get specific question by ID
// @route   GET /api/questions/:id
// @access  Public
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    
    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found'
      });
    }

    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching question',
      error: error.message
    });
  }
};

// @desc    Get available categories
// @route   GET /api/questions/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    const categories = await Question.distinct('category');
    
    res.json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message
    });
  }
};

// @desc    Validate answers
// @route   POST /api/questions/validate
// @access  Public
const validateAnswers = async (req, res) => {
  try {
    const { answers } = req.body; // Array of { questionId, userAnswer }
    
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: 'Answers array is required'
      });
    }

    const questionIds = answers.map(a => a.questionId);
    const questions = await Question.find({ _id: { $in: questionIds } });
    
    const results = answers.map(userAnswer => {
      const question = questions.find(q => q._id.toString() === userAnswer.questionId);
      if (!question) {
        return {
          questionId: userAnswer.questionId,
          correct: false,
          error: 'Question not found'
        };
      }

      const isCorrect = question.correctAnswer === userAnswer.userAnswer;
      
      return {
        questionId: userAnswer.questionId,
        correct: isCorrect,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation
      };
    });

    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    console.error('Error validating answers:', error);
    res.status(500).json({
      success: false,
      message: 'Error validating answers',
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
  getQuestions,
  getQuestionById,
  getCategories,
  validateAnswers
};
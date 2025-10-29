import 'package:flutter/material.dart';
import '../../services/api_service.dart';
import '../../models/game_session.dart';
import 'result_screen.dart';
import 'dart:async';


class GameScreen extends StatefulWidget {
  final List<String> playerNames;
  final String category;
  final String difficulty;
  final int totalQuestions;

  const GameScreen({
    super.key,
    required this.playerNames,
    required this.category,
    required this.difficulty,
    required this.totalQuestions,
  });

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  late Future<Map<String, dynamic>> _gameSessionFuture;
  GameSession? _gameSession;
  Map<String, dynamic>? _currentQuestion;
  int _timerCount = 30;
  late Timer _timer;

  @override
  void initState() {
    super.initState();
    _gameSessionFuture = _createGameSession();
  }

  Future<Map<String, dynamic>> _createGameSession() async {
    final response = await ApiService.createGameSession(
      playerNames: widget.playerNames,
      category: widget.category,
      difficulty: widget.difficulty,
      totalQuestions: widget.totalQuestions,
    );
    
    setState(() {
      _gameSession = GameSession.fromJson(response['data']);
      _currentQuestion = response['data']['currentQuestion'];
    });
    
    _startTimer();
    return response;
  }

  void _startTimer() {
    _timerCount = 30;
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {
        if (_timerCount > 0) {
          _timerCount--;
        } else {
          _timer.cancel();
          // Time's up - submit empty answer
          _submitAnswer('');
        }
      });
    });
  }

  void _submitAnswer(String answer) async {
    _timer.cancel();
    
    try {
      final response = await ApiService.submitAnswer(
        sessionId: _gameSession!.sessionId,
        playerName: _gameSession!.currentPlayer,
        answer: answer,
      );

      final data = response['data'];
      
      if (data['status'] == 'completed') {
        // Game finished - navigate to results
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => ResultsScreen(sessionId: _gameSession!.sessionId),
          ),
        );
      } else {
        // Continue to next player/question
        setState(() {
          _gameSession = GameSession.fromJson(data);
          _currentQuestion = data['currentQuestion'];
        });
        _startTimer();
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    }
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Trivia Game'),
      ),
      body: FutureBuilder<Map<String, dynamic>>(
        future: _gameSessionFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else {
            return _buildGameContent();
          }
        },
      ),
    );
  }

  Widget _buildGameContent() {
    if (_gameSession == null || _currentQuestion == null) {
      return const Center(child: CircularProgressIndicator());
    }

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          // Progress indicator
          LinearProgressIndicator(
            value: (_gameSession!.currentQuestionIndex + 1) / 
                   _gameSession!.totalQuestions,
          ),
          const SizedBox(height: 10),
          Text(
            'Question ${_gameSession!.currentQuestionIndex + 1} of ${_gameSession!.totalQuestions}',
            style: const TextStyle(fontSize: 16),
          ),
          
          // Current player and timer
          const SizedBox(height: 20),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Text(
                    "Current Player: ${_gameSession!.currentPlayer}",
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.blue,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    'Time: $_timerCount seconds',
                    style: TextStyle(
                      fontSize: 18,
                      color: _timerCount <= 10 ? Colors.red : Colors.black,
                    ),
                  ),
                ],
              ),
            ),
          ),
          
          // Question
          const SizedBox(height: 20),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                _currentQuestion!['question'],
                style: const TextStyle(fontSize: 18),
                textAlign: TextAlign.center,
              ),
            ),
          ),
          
          // Options
          const SizedBox(height: 20),
          Expanded(
            child: ListView.builder(
              itemCount: _currentQuestion!['options'].length,
              itemBuilder: (context, index) {
                final option = _currentQuestion!['options'][index];
                return Card(
                  margin: const EdgeInsets.symmetric(vertical: 5),
                  child: ListTile(
                    title: Text(option),
                    onTap: () {
                      _submitAnswer(option);
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'game_screen.dart';

class GameSettingsScreen extends StatefulWidget {
  final List<String> playerNames;
  final String category;

  const GameSettingsScreen({
    super.key,
    required this.playerNames,
    required this.category,
  });

  @override
  State<GameSettingsScreen> createState() => _GameSettingsScreenState();
}

class _GameSettingsScreenState extends State<GameSettingsScreen> {
  String _difficulty = 'easy';
  int _numberOfQuestions = 10;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Game Settings'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'How tough you like?',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            // Difficulty selection
            DropdownButtonFormField<String>(
              value: _difficulty,
              onChanged: (value) {
                setState(() {
                  _difficulty = value!;
                });
              },
              items: const [
                DropdownMenuItem(value: 'easy', child: Text('Easy')),
                DropdownMenuItem(value: 'medium', child: Text('Medium')),
                DropdownMenuItem(value: 'hard', child: Text('Hard')),
              ],
            ),
            const SizedBox(height: 30),
            const Text(
              'Number of Questions:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Slider(
              value: _numberOfQuestions.toDouble(),
              min: 5,
              max: 20,
              divisions: 15,
              label: _numberOfQuestions.toString(),
              onChanged: (value) {
                setState(() {
                  _numberOfQuestions = value.round();
                });
              },
            ),
            Text(
              '$_numberOfQuestions questions',
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 16),
            ),
            const Spacer(),
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => GameScreen(
                        playerNames: widget.playerNames,
                        category: widget.category,
                        difficulty: _difficulty,
                        totalQuestions: _numberOfQuestions,
                      ),
                    ),
                  );
                },
                child: const Text('Start Game'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
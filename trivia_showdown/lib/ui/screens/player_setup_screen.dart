import 'package:flutter/material.dart';
import 'category_selection_screen.dart';

class PlayerSetupScreen extends StatefulWidget {
  const PlayerSetupScreen({super.key});

  @override
  State<PlayerSetupScreen> createState() => _PlayerSetupScreenState();
}

class _PlayerSetupScreenState extends State<PlayerSetupScreen> {
  final List<TextEditingController> _controllers = List.generate(
    4, 
    (index) => TextEditingController()
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Who's Ready to Play?"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const Text(
              'Enter player names:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            // Player input fields
            for (int i = 0; i < 4; i++)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: TextField(
                  controller: _controllers[i],
                  decoration: InputDecoration(
                    labelText: 'Player ${i + 1}',
                    border: const OutlineInputBorder(),
                    hintText: 'Enter name for Player ${i + 1}',
                  ),
                ),
              ),
            const Spacer(),
            ElevatedButton(
              onPressed: () {
                final playerNames = _controllers
                    .where((controller) => controller.text.isNotEmpty)
                    .map((controller) => controller.text)
                    .toList();

                if (playerNames.length < 2) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('At least 2 players are required!'),
                    ),
                  );
                  return;
                }

                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => CategorySelectionScreen(
                      playerNames: playerNames,
                    ),
                  ),
                );
              },
              child: const Text("Let's Go!"),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    for (var controller in _controllers) {
      controller.dispose();
    }
    super.dispose();
  }
}
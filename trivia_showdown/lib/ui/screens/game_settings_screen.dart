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
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color(0xFF1a237e), // Deep royal blue
              Color(0xFF283593), // Indigo
              Color(0xFF311b92), // Dark purple undertone
            ],
            stops: [0.0, 0.6, 1.0],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              // Header section (fixed)
              _buildHeader(),
              
              // Content section (scrollable)
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Fine-tune your trivia challenge',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.8),
                          fontSize: 16,
                        ),
                      ),
                      
                      const SizedBox(height: 24),
                      
                      // Game info card
                      _buildGameInfoCard(),
                      
                      const SizedBox(height: 20), // Reduced spacing
                      
                      // Difficulty selection
                      _buildDifficultySection(),
                      
                      const SizedBox(height: 20), // Reduced spacing
                      
                      // Number of questions
                      _buildQuestionsSection(),
                      
                      const SizedBox(height: 20), // Add padding at bottom of scroll
                    ],
                  ),
                ),
              ),
              
              // Start button (fixed at bottom)
              _buildStartButtonSection(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back, color: Colors.white, size: 28),
            onPressed: () => Navigator.pop(context),
          ),
          const SizedBox(width: 8), // Reduced spacing
          const Icon(Icons.settings_rounded, color: Colors.amber, size: 28), // Reduced size
          const SizedBox(width: 8), // Reduced spacing
          const Expanded(
            child: Text(
              'Game Setup',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24, // Reduced font size
                fontWeight: FontWeight.bold,
                shadows: [
                  Shadow(
                    blurRadius: 4.0,
                    color: Colors.black45,
                    offset: Offset(2.0, 2.0),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStartButtonSection() {
    return Container(
      padding: const EdgeInsets.all(16.0),
      child: _buildStartButton(),
    );
  }

  Widget _buildGameInfoCard() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 6, // Reduced blur
            offset: const Offset(0, 3), // Reduced offset
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.people_rounded, color: Colors.amber, size: 18), // Reduced size
              SizedBox(width: 6), // Reduced spacing
              Text(
                'Players Ready',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16, // Reduced font size
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 10), // Reduced spacing
          Wrap(
            spacing: 6, // Reduced spacing
            runSpacing: 6, // Reduced spacing
            children: widget.playerNames.map((player) {
              return Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5), // Reduced padding
                decoration: BoxDecoration(
                  color: Colors.amber.withOpacity(0.2),
                  borderRadius: BorderRadius.circular(16), // Reduced border radius
                  border: Border.all(color: Colors.amber.withOpacity(0.5)),
                ),
                child: Text(
                  player,
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                    fontSize: 12, // Reduced font size
                  ),
                ),
              );
            }).toList(),
          ),
          const SizedBox(height: 10), // Reduced spacing
          const Divider(color: Colors.white30, height: 1), // Reduced height
          const SizedBox(height: 8), // Reduced spacing
          Row(
            children: [
              const Icon(Icons.category_rounded, color: Colors.amber, size: 14), // Reduced size
              const SizedBox(width: 6), // Reduced spacing
              Expanded(
                child: Text(
                  'Category: ${widget.category}',
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 13, // Reduced font size
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildDifficultySection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 4, // Reduced blur
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.speed_rounded, color: Colors.amber, size: 18), // Reduced size
              SizedBox(width: 6), // Reduced spacing
              Text(
                'Difficulty Level',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16, // Reduced font size
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12), // Reduced spacing
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildDifficultyOption('Easy', 'easy', Icons.auto_awesome_rounded),
              _buildDifficultyOption('Medium', 'medium', Icons.auto_awesome_motion_rounded),
              _buildDifficultyOption('Hard', 'hard', Icons.auto_awesome_mosaic_rounded),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildDifficultyOption(String label, String value, IconData icon) {
    final isSelected = _difficulty == value;
    return GestureDetector(
      onTap: () {
        setState(() {
          _difficulty = value;
        });
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10), // Reduced padding
        decoration: BoxDecoration(
          gradient: isSelected
              ? const LinearGradient(
                  colors: [
                    Color(0xFFFFD700),
                    Color(0xFFFFA000),
                  ],
                )
              : LinearGradient(
                  colors: [
                    Colors.white.withOpacity(0.05),
                    Colors.white.withOpacity(0.02),
                  ],
                ),
          borderRadius: BorderRadius.circular(10), // Reduced border radius
          border: Border.all(
            color: isSelected ? Colors.amber : Colors.white.withOpacity(0.2),
            width: isSelected ? 2 : 1,
          ),
          boxShadow: isSelected
              ? [
                  BoxShadow(
                    color: Colors.orange.withOpacity(0.3),
                    blurRadius: 4, // Reduced blur
                    offset: const Offset(0, 2), // Reduced offset
                  ),
                ]
              : null,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              color: isSelected ? Colors.white : Colors.amber,
              size: 20, // Reduced size
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                color: isSelected ? Colors.white : Colors.white,
                fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                fontSize: 11, // Reduced font size
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildQuestionsSection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 4, // Reduced blur
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.format_list_numbered_rounded, color: Colors.amber, size: 18), // Reduced size
              SizedBox(width: 6), // Reduced spacing
              Text(
                'Number of Questions',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16, // Reduced font size
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12), // Reduced spacing
          SliderTheme(
            data: SliderThemeData(
              trackHeight: 6, // Reduced track height
              thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 10), // Reduced thumb size
              overlayShape: const RoundSliderOverlayShape(overlayRadius: 16), // Reduced overlay
              activeTrackColor: Colors.amber,
              inactiveTrackColor: Colors.white.withOpacity(0.3),
              thumbColor: Colors.amber,
              overlayColor: Colors.amber.withOpacity(0.2),
            ),
            child: Slider(
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
          ),
          const SizedBox(height: 6), // Reduced spacing
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '5',
                style: TextStyle(
                  color: Colors.white.withOpacity(0.7),
                  fontSize: 11, // Reduced font size
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4), // Reduced padding
                decoration: BoxDecoration(
                  color: Colors.amber.withOpacity(0.2),
                  borderRadius: BorderRadius.circular(16), // Reduced border radius
                  border: Border.all(color: Colors.amber.withOpacity(0.5)),
                ),
                child: Text(
                  '$_numberOfQuestions Questions',
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 12, // Reduced font size
                  ),
                ),
              ),
              Text(
                '20',
                style: TextStyle(
                  color: Colors.white.withOpacity(0.7),
                  fontSize: 11, // Reduced font size
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildStartButton() {
    return Container(
      width: double.infinity,
      height: 55, // Reduced height
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            Color(0xFFFFD700), // Gold
            Color(0xFFFFA000), // Orange-gold
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(25), // Reduced border radius
        boxShadow: [
          BoxShadow(
            color: Colors.orange.withOpacity(0.4),
            blurRadius: 6, // Reduced blur
            offset: const Offset(0, 3), // Reduced offset
          ),
        ],
      ),
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
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.transparent,
          shadowColor: Colors.transparent,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(25), // Reduced border radius
          ),
        ),
        child: const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.play_arrow_rounded, color: Colors.white, size: 22), // Reduced size
            SizedBox(width: 6), // Reduced spacing
            Text(
              "Start Trivia Showdown!",
              style: TextStyle(
                color: Colors.white,
                fontSize: 16, // Reduced font size
                fontWeight: FontWeight.bold,
                shadows: [
                  Shadow(
                    blurRadius: 2.0,
                    color: Colors.black45,
                    offset: Offset(1.0, 1.0),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
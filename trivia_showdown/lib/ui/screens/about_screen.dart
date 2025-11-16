import 'package:flutter/material.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({Key? key}) : super(key: key);

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
          child: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 24.0), // Reduced horizontal padding
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Header with back button
                _buildHeader(context),
                const SizedBox(height: 32),
                
                // App Icon/Logo
                _buildAppIcon(),
                const SizedBox(height: 32),
                
                // About Description Section
                _buildAboutSection(),
                const SizedBox(height: 20), // Reduced spacing
                
                // How To Play Section
                _buildHowToPlaySection(),
                const SizedBox(height: 20), // Reduced spacing
                
                // Team Section
                _buildTeamSection(),
                const SizedBox(height: 20), // Reduced spacing
                
                // Footer Section
                _buildFooterSection(),
                const SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }

 Widget _buildHeader(BuildContext context) {
  return Row(
    children: [
     
      const SizedBox(width: 12),
      const Icon(Icons.info_rounded, color: Colors.amber, size: 28),
      const SizedBox(width: 8),
      const Expanded(
        child: Text(
          'About Trivia Showdown',
          style: TextStyle(
            color: Colors.white,
            fontSize: 24,
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
  );
}
  Widget _buildAppIcon() {
    return Center(
      child: Container(
        width: 100, // Reduced size
        height: 100,
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.1),
          borderRadius: BorderRadius.circular(20), // Reduced border radius
          border: Border.all(color: Colors.white.withOpacity(0.3), width: 2),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.3),
              blurRadius: 8, // Reduced blur
              offset: const Offset(0, 3), // Reduced offset
            ),
          ],
        ),
        child: const Icon(
          Icons.quiz_rounded,
          color: Colors.amber,
          size: 50, // Reduced size
        ),
      ),
    );
  }

  Widget _buildAboutSection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12), // Reduced border radius
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 6, // Reduced blur
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.sports_esports_rounded, color: Colors.amber, size: 20), // Reduced size
              const SizedBox(width: 8), // Reduced spacing
              const Expanded(
                child: Text(
                  'About the Game',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18, // Reduced font size
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
              ),
            ],
          ),
          const SizedBox(height: 12), // Reduced spacing
          Text(
            'Trivia Showdown is a fast-paced, single or multiplayer quiz game where players '
            'compete to see who can answer the most questions correctly in the shortest time. '
            'Challenge your friends and family to an exciting battle of wits!',
            style: TextStyle(
              color: Colors.white.withOpacity(0.9),
              fontSize: 14, // Reduced font size
              height: 1.5, // Adjusted line height
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHowToPlaySection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12), // Reduced border radius
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 6, // Reduced blur
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.play_circle_fill_rounded, color: Colors.amber, size: 20), // Reduced size
              const SizedBox(width: 8), // Reduced spacing
              const Expanded(
                child: Text(
                  'How to Play',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18, // Reduced font size
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
              ),
            ],
          ),
          const SizedBox(height: 12), // Reduced spacing
          _buildStepItem(1, 'Start a new game from the Home screen'),
          _buildStepItem(2, 'Choose your trivia category and difficulty'),
          _buildStepItem(3, 'Answer each question before the timer runs out'),
          _buildStepItem(4, 'Earn points for each correct answer'),
          _buildStepItem(5, 'Check your score on the leaderboard!'),
        ],
      ),
    );
  }

  Widget _buildStepItem(int number, String text) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10), // Reduced spacing
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 24, // Reduced size
            height: 24,
            decoration: BoxDecoration(
              color: Colors.blue,
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 1.5), // Reduced border width
            ),
            child: Center(
              child: Text(
                number.toString(),
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 12, // Reduced font size
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          const SizedBox(width: 10), // Reduced spacing
          Expanded(
            child: Text(
              text,
              style: TextStyle(
                color: Colors.white.withOpacity(0.9),
                fontSize: 14, // Reduced font size
                height: 1.4,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTeamSection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12), // Reduced border radius
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 6, // Reduced blur
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.people_rounded, color: Colors.amber, size: 20), // Reduced size
              const SizedBox(width: 8), // Reduced spacing
              const Expanded(
                child: Text(
                  'Meet the Team',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18, // Reduced font size
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
              ),
            ],
          ),
          const SizedBox(height: 12), // Reduced spacing
          _buildTeamMember('Alysse Deterville'),
          _buildTeamMember('Avery Taylor'),
          _buildTeamMember('Connor Pierce'),
          _buildTeamMember('Alson Sharma'),
        ],
      ),
    );
  }

  Widget _buildTeamMember(String name) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8), // Reduced spacing
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.05),
        borderRadius: BorderRadius.circular(6), // Reduced border radius
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: Row(
        children: [
          Icon(Icons.person_rounded, color: Colors.amber.withOpacity(0.8), size: 16), // Reduced size
          const SizedBox(width: 10), // Reduced spacing
          Expanded(
            child: Text(
              name,
              style: TextStyle(
                color: Colors.white.withOpacity(0.9),
                fontSize: 14, // Reduced font size
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFooterSection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16), // Reduced padding
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12), // Reduced border radius
        border: Border.all(color: Colors.white.withOpacity(0.3)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 6, // Reduced blur
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        children: [
          const Icon(
            Icons.emoji_events_rounded,
            color: Colors.amber,
            size: 32, // Reduced size
          ),
          const SizedBox(height: 10), // Reduced spacing
          const Text(
            'Version 1.0.0',
            style: TextStyle(
              color: Colors.white,
              fontSize: 14, // Reduced font size
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 6), // Reduced spacing
          Text(
            '2025 Trivia Showdown Team',
            style: TextStyle(
              color: Colors.white.withOpacity(0.8),
              fontSize: 12, // Reduced font size
            ),
          ),
          const SizedBox(height: 4), // Reduced spacing
          Text(
            'Developed with Flutter 💙',
            style: TextStyle(
              color: Colors.white.withOpacity(0.7),
              fontSize: 10, // Reduced font size
            ),
          ),
        ],
      ),
    );
  }
}
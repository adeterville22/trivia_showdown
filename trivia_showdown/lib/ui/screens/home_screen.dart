import 'package:flutter/material.dart';
import 'player_setup_screen.dart';
import 'leaderboard_screen.dart';
import 'about_screen.dart';

class HomeScreen extends StatefulWidget {
  final int? initialTab;

  const HomeScreen({super.key, this.initialTab});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with TickerProviderStateMixin {
  late AnimationController _animationController;
  final Map<String, bool> _buttonHoverStates = {
    'play': false,
    'howToPlay': false,
  };

  late int _currentIndex;
  final List<Widget> _screens = [
    const _HomeContent(), // Home content wrapped in a widget
    const LeaderboardScreen(),
    const AboutScreen(),
  ];

  @override
  void initState() {
    super.initState();
    _currentIndex = widget.initialTab ?? 0;
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 300),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _onButtonHover(String buttonName, bool isHovering) {
    setState(() {
      _buttonHoverStates[buttonName] = isHovering;
    });
    if (isHovering) {
      _animationController.forward();
    } else {
      _animationController.reverse();
    }
  }

  void _onItemTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: _buildBottomNavigationBar(),
    );
  }

  Widget _buildBottomNavigationBar() {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Colors.blue.shade800,
            Colors.blue.shade900,
            const Color(0xFF1a237e),
          ],
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.3),
            blurRadius: 10,
            offset: const Offset(0, -2),
          ),
        ],
      ),
      child: SafeArea(
        child: BottomNavigationBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          currentIndex: _currentIndex,
          onTap: _onItemTapped,
          selectedItemColor: Colors.amber,
          unselectedItemColor: Colors.white70,
          selectedLabelStyle: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 12,
          ),
          unselectedLabelStyle: const TextStyle(
            fontSize: 12,
          ),
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home_rounded, size: 28),
              label: 'Home',
              activeIcon: Icon(Icons.home_rounded, size: 30, color: Colors.amber),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.leaderboard_rounded, size: 28),
              label: 'Leaderboard',
              activeIcon: Icon(Icons.leaderboard_rounded, size: 30, color: Colors.amber),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.info_rounded, size: 28),
              label: 'About',
              activeIcon: Icon(Icons.info_rounded, size: 30, color: Colors.amber),
            ),
          ],
        ),
      ),
    );
  }
}

// Separate widget for home content to avoid rebuilding issues
class _HomeContent extends StatefulWidget {
  const _HomeContent({super.key});

  @override
  State<_HomeContent> createState() => _HomeContentState();
}

class _HomeContentState extends State<_HomeContent> with TickerProviderStateMixin {
  late AnimationController _animationController;
  late AnimationController _brainAnimationController;
  late Animation<double> _brainFloatAnimation;
  late Animation<double> _brainScaleAnimation;
  
  final Map<String, bool> _buttonHoverStates = {
    'play': false,
    'howToPlay': false,
  };

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 300),
    );
    
    // Simplified brain character animations
    _brainAnimationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3),
    )..repeat(reverse: true);
    
    _brainFloatAnimation = Tween<double>(
      begin: -15,
      end: 15,
    ).animate(CurvedAnimation(
      parent: _brainAnimationController,
      curve: Curves.easeInOut,
    ));
    
    _brainScaleAnimation = Tween<double>(
      begin: 0.98,
      end: 1.02,
    ).animate(CurvedAnimation(
      parent: _brainAnimationController,
      curve: Curves.easeInOut,
    ));
  }

  @override
  void dispose() {
    _animationController.dispose();
    _brainAnimationController.dispose();
    super.dispose();
  }

  void _onButtonHover(String buttonName, bool isHovering) {
    setState(() {
      _buttonHoverStates[buttonName] = isHovering;
    });
    if (isHovering) {
      _animationController.forward();
    } else {
      _animationController.reverse();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
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
      child: Stack(
        children: [
          // Main content column
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Logo image
                Image.asset(
                  'assets/images/trivia_showdown_logo.png',
                  width: 300,
                  height: 300,
                  fit: BoxFit.contain,
                ),
                
                const SizedBox(height: 180),
                
                // Buttons section
                _buildAnimatedButton(
                  text: 'Play Game',
                  isPrimary: true,
                  isHovering: _buttonHoverStates['play']!,
                  onHover: (hovering) => _onButtonHover('play', hovering),
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => const PlayerSetupScreen()),
                    );
                  },
                ),
                
                const SizedBox(height: 20),
                
                _buildAnimatedButton(
                  text: 'How to Play',
                  isPrimary: false,
                  isHovering: _buttonHoverStates['howToPlay']!,
                  onHover: (hovering) => _onButtonHover('howToPlay', hovering),
                  onPressed: () {
                    _showHowToPlay(context);
                  },
                ),
              ],
            ),
          ),
          
          // Animated Character image - SIMPLIFIED
          Positioned(
            top: MediaQuery.of(context).size.height * 0.23,
            left: 0,
            right: 0,
            child: IgnorePointer(
              child: Center(
                child: AnimatedBuilder(
                  animation: _brainAnimationController,
                  builder: (context, child) {
                    return Transform.translate(
                      offset: Offset(0, _brainFloatAnimation.value),
                      child: Transform.scale(
                        scale: _brainScaleAnimation.value,
                        child: Image.asset(
                          'assets/images/brain_character.png',
                          width: 500,
                          height: 500,
                          fit: BoxFit.contain,
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAnimatedButton({
    required String text,
    required bool isPrimary,
    required bool isHovering,
    required Function(bool) onHover,
    required VoidCallback onPressed,
  }) {
    return MouseRegion(
      onEnter: (_) => onHover(true),
      onExit: (_) => onHover(false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        width: isHovering ? 240 : 220,
        height: isHovering ? 65 : 55,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: isPrimary
                ? (isHovering
                    ? [const Color(0xFFFFE135), const Color(0xFFFFB347)] // Brighter gold on hover
                    : [const Color(0xFFFFD700), const Color(0xFFFFA000)])
                : (isHovering
                    ? [const Color(0xFF42A5F5), const Color(0xFF1976D2)] // Brighter blue on hover
                    : [const Color(0xFF2196F3), const Color(0xFF0D47A1)]),
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          borderRadius: BorderRadius.circular(30),
          boxShadow: [
            if (isHovering)
              BoxShadow(
                color: (isPrimary ? Colors.orange : Colors.blue).withOpacity(0.6),
                blurRadius: 15,
                offset: const Offset(0, 6),
                spreadRadius: 2,
              )
            else
              BoxShadow(
                color: (isPrimary ? Colors.orange : Colors.blue).withOpacity(0.4),
                blurRadius: 8,
                offset: const Offset(0, 4),
              ),
          ],
          border: isHovering
              ? Border.all(color: Colors.white, width: 2)
              : null,
        ),
        child: ElevatedButton(
          onPressed: onPressed,
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.transparent,
            shadowColor: Colors.transparent,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(30),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
          ),
          child: AnimatedDefaultTextStyle(
            duration: const Duration(milliseconds: 300),
            style: TextStyle(
              color: Colors.white,
              fontSize: isHovering ? 20 : 18,
              fontWeight: FontWeight.bold,
              shadows: [
                if (isHovering)
                  const Shadow(
                    blurRadius: 4.0,
                    color: Colors.black45,
                    offset: Offset(1.0, 1.0),
                  ),
              ],
            ),
            child: Text(text),
          ),
        ),
      ),
    );
  }

  Widget _buildStepItem({required int number, required String title, required String description}) {
    return Container(
      padding: const EdgeInsets.all(12),
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.white.withOpacity(0.3)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Number circle
          Container(
            width: 32,
            height: 32,
            decoration: BoxDecoration(
              color: Colors.blue,
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 2),
            ),
            child: Center(
              child: Text(
                number.toString(),
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          const SizedBox(width: 12),
          // Content
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  description,
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.9),
                    fontSize: 13,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  void _showHowToPlay(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.all(20),
        child: ConstrainedBox(
          constraints: BoxConstraints(
            maxHeight: MediaQuery.of(context).size.height * 0.8,
          ),
          child: Container(
            width: double.infinity,
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Color(0xFF1a237e),
                  Color(0xFF283593),
                  Color(0xFF311b92),
                ],
              ),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Colors.white, width: 2),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.5),
                  blurRadius: 20,
                  spreadRadius: 5,
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Header
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  decoration: const BoxDecoration(
                    color: Colors.blue,
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(20),
                      topRight: Radius.circular(20),
                    ),
                  ),
                  child: const Row(
                    children: [
                      Icon(Icons.help_outline, color: Colors.white, size: 24),
                      SizedBox(width: 12),
                      Text(
                        'How to Play',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
                
                // Scrollable Content
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      children: [
                        _buildStepItem(
                          number: 1,
                          title: 'Enter Player Names',
                          description: 'Add all players who will participate in the trivia showdown',
                        ),
                        _buildStepItem(
                          number: 2,
                          title: 'Select Category & Difficulty',
                          description: 'Choose from various topics and difficulty levels',
                        ),
                        _buildStepItem(
                          number: 3,
                          title: 'Take Turns Answering',
                          description: 'Players answer questions one by one in sequence',
                        ),
                        _buildStepItem(
                          number: 4,
                          title: '30 Second Timer',
                          description: 'Each question has a 30-second time limit',
                        ),
                        _buildStepItem(
                          number: 5,
                          title: 'Win the Game',
                          description: 'The player with the highest score wins the trivia showdown!',
                        ),
                      ],
                    ),
                  ),
                ),
                
                // Footer
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.3),
                    borderRadius: const BorderRadius.only(
                      bottomLeft: Radius.circular(20),
                      bottomRight: Radius.circular(20),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      ElevatedButton(
                        onPressed: () => Navigator.pop(context),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue,
                          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 12),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(25),
                          ),
                        ),
                        child: const Text(
                          'Got It!',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
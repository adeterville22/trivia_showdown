import 'package:flutter/material.dart';
import 'game_settings_screen.dart';
import '../../services/api_service.dart';

class CategorySelectionScreen extends StatefulWidget {
  final List<String> playerNames;

  const CategorySelectionScreen({super.key, required this.playerNames});

  @override
  State<CategorySelectionScreen> createState() => _CategorySelectionScreenState();
}

class _CategorySelectionScreenState extends State<CategorySelectionScreen> {
  String? _selectedCategory;
  late Future<List<String>> _categoriesFuture;

  @override
  void initState() {
    super.initState();
    _categoriesFuture = ApiService.getCategories();
  }

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
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Header with back button
                Row(
                  children: [
                    IconButton(
                      icon: const Icon(Icons.arrow_back, color: Colors.white, size: 28),
                      onPressed: () => Navigator.pop(context),
                    ),
                    const SizedBox(width: 16),
                    const Icon(Icons.category_rounded, color: Colors.amber, size: 32),
                    const SizedBox(width: 12),
                    const Text(
                      'Pick Your Brain!',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 28,
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
                  ],
                ),
                
                const SizedBox(height: 8),
                
                const Text(
                  'Choose a category that tickles your neurons',
                  style: TextStyle(
                    color: Colors.white70,
                    fontSize: 16,
                  ),
                ),
                
                const SizedBox(height: 32),
                
                // Category selection area
                Expanded(
                  child: FutureBuilder<List<String>>(
                    future: _categoriesFuture,
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.waiting) {
                        return const Center(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              CircularProgressIndicator(
                                valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                              ),
                              SizedBox(height: 20),
                              Text(
                                'Loading categories...',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 16,
                                ),
                              ),
                            ],
                          ),
                        );
                      } else if (snapshot.hasError) {
                        return Center(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const Icon(
                                Icons.error_outline,
                                color: Colors.white,
                                size: 64,
                              ),
                              const SizedBox(height: 20),
                              const Text(
                                'Failed to load categories',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: 10),
                              Text(
                                snapshot.error.toString(),
                                style: const TextStyle(
                                  color: Colors.white70,
                                  fontSize: 14,
                                ),
                                textAlign: TextAlign.center,
                              ),
                              const SizedBox(height: 20),
                              ElevatedButton(
                                onPressed: () {
                                  setState(() {
                                    _categoriesFuture = ApiService.getCategories();
                                  });
                                },
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.blue,
                                  padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 12),
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(25),
                                  ),
                                ),
                                child: const Text(
                                  'Try Again',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        );
                      } else {
                        final categories = snapshot.data!;
                        return Column(
                          children: [
                            // Categories grid
                            Expanded(
                              child: SingleChildScrollView(
                                child: Wrap(
                                  spacing: 12,
                                  runSpacing: 12,
                                  alignment: WrapAlignment.center,
                                  children: categories.map((category) {
                                    final isSelected = _selectedCategory == category;
                                    return _buildCategoryButton(category, isSelected);
                                  }).toList(),
                                ),
                              ),
                            ),
                            
                            const SizedBox(height: 20),
                            
                            // Next button
                            _buildNextButton(),
                          ],
                        );
                      }
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildCategoryButton(String category, bool isSelected) {
    return GestureDetector(
      onTap: () {
        setState(() {
          _selectedCategory = category;
        });
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        decoration: BoxDecoration(
          gradient: isSelected
              ? const LinearGradient(
                  colors: [
                    Color(0xFFFFD700), // Gold
                    Color(0xFFFFA000), // Orange-gold
                  ],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                )
              : LinearGradient(
                  colors: [
                    Colors.white.withOpacity(0.1),
                    Colors.white.withOpacity(0.05),
                  ],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: isSelected ? Colors.amber : Colors.white.withOpacity(0.3),
            width: isSelected ? 2 : 1,
          ),
          boxShadow: isSelected
              ? [
                  BoxShadow(
                    color: Colors.orange.withOpacity(0.4),
                    blurRadius: 8,
                    offset: const Offset(0, 4),
                  ),
                ]
              : [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.2),
                    blurRadius: 4,
                    offset: const Offset(0, 2),
                  ),
                ],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              _getCategoryIcon(category),
              color: isSelected ? Colors.white : Colors.amber,
              size: 32,
            ),
            const SizedBox(height: 8),
            Text(
              _formatCategoryName(category),
              style: TextStyle(
                color: isSelected ? Colors.white : Colors.white,
                fontSize: 14,
                fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
              ),
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildNextButton() {
    return Container(
      width: double.infinity,
      height: 60,
      decoration: BoxDecoration(
        gradient: _selectedCategory == null
            ? LinearGradient(
                colors: [
                  Colors.grey.shade600,
                  Colors.grey.shade800,
                ],
              )
            : const LinearGradient(
                colors: [
                  Color(0xFFFFD700), // Gold
                  Color(0xFFFFA000), // Orange-gold
                ],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
        borderRadius: BorderRadius.circular(30),
        boxShadow: _selectedCategory == null
            ? null
            : [
                BoxShadow(
                  color: Colors.orange.withOpacity(0.4),
                  blurRadius: 8,
                  offset: const Offset(0, 4),
                ),
              ],
      ),
      child: ElevatedButton(
        onPressed: _selectedCategory == null
            ? null
            : () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => GameSettingsScreen(
                      playerNames: widget.playerNames,
                      category: _selectedCategory!,
                    ),
                  ),
                );
              },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.transparent,
          shadowColor: Colors.transparent,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(30),
          ),
          disabledBackgroundColor: Colors.transparent,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.arrow_forward_rounded,
              color: _selectedCategory == null ? Colors.grey.shade400 : Colors.white,
              size: 24,
            ),
            const SizedBox(width: 8),
            Text(
              "Next Steps!",
              style: TextStyle(
                color: _selectedCategory == null ? Colors.grey.shade400 : Colors.white,
                fontSize: 18,
                fontWeight: FontWeight.bold,
                shadows: _selectedCategory == null
                    ? null
                    : [
                        const Shadow(
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

  IconData _getCategoryIcon(String category) {
    final iconMap = {
      'General Knowledge': Icons.public_rounded,
      'Entertainment': Icons.movie_rounded,
      'Science': Icons.science_rounded,
      'Sports': Icons.sports_soccer_rounded,
      'Geography': Icons.public_rounded,
      'History': Icons.account_balance,
      'Art': Icons.palette_rounded,
      'Animals': Icons.pets_rounded,
      'Vehicles': Icons.directions_car_rounded,
      'Music': Icons.music_note_rounded,
      'Mathematics': Icons.calculate_rounded,
      'Mythology': Icons.auto_awesome_rounded,
      'Television': Icons.tv_rounded,
    };

    // Try to find matching icon, fallback to category icon
    for (final key in iconMap.keys) {
      if (category.toLowerCase().contains(key.toLowerCase().split(' ')[0])) {
        return iconMap[key]!;
      }
    }

    return Icons.category_rounded; // Default icon
  }

  String _formatCategoryName(String category) {
    // Convert to title case and handle special cases
    final words = category.split(' ');
    final formattedWords = words.map((word) {
      if (word.isEmpty) return word;
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }).toList();

    return formattedWords.join(' ');
  }
}
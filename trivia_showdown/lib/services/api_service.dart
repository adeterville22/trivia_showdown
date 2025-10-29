import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://localhost:4000/api';
  
  // Create new game session
  static Future<Map<String, dynamic>> createGameSession({
    required List<String> playerNames,
    required String category,
    required String difficulty,
    required int totalQuestions,
  }) async {
    final response = await http.post(
      Uri.parse('$baseUrl/games'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'playerNames': playerNames,
        'category': category,
        'difficulty': difficulty,
        'totalQuestions': totalQuestions,
      }),
    );

    if (response.statusCode == 201) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to create game session: ${response.statusCode}');
    }
  }

  // Submit answer
  static Future<Map<String, dynamic>> submitAnswer({
    required String sessionId,
    required String playerName,
    required String answer,
  }) async {
    final response = await http.post(
      Uri.parse('$baseUrl/games/$sessionId/answer'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'playerName': playerName,
        'answer': answer,
      }),
    );

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to submit answer: ${response.statusCode}');
    }
  }

  // Get game state
  static Future<Map<String, dynamic>> getGameState(String sessionId) async {
    final response = await http.get(Uri.parse('$baseUrl/games/$sessionId'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to get game state: ${response.statusCode}');
    }
  }

  // Get categories
  static Future<List<String>> getCategories() async {
    final response = await http.get(Uri.parse('$baseUrl/questions/categories'));

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      return List<String>.from(data['data']);
    } else {
      throw Exception('Failed to get categories: ${response.statusCode}');
    }
  }
}
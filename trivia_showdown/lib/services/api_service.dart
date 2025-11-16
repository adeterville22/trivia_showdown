import 'dart:convert';
import 'dart:io' show Platform;
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

class ApiService {
  static String get baseUrl {
    if (kIsWeb) {
      return ''; // Web calls the same domain automatically
    }

    if (Platform.isAndroid) {
      return 'http://10.0.2.2:4000/api'; // Android emulator
    }

    if (Platform.isIOS) {
      return 'http://localhost:4000/api'; // iOS Simulator
    }

    // For real devices (Android/iOS)
    return 'http://192.168.1.50:4000/api'; // <--- CHANGE this to your Mac WiFi IP
  }
  
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

  // NEW: Get global leaderboard
  static Future<Map<String, dynamic>> getGlobalLeaderboard() async {
    final response = await http.get(Uri.parse('$baseUrl/games/leaderboard/global'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to get global leaderboard: ${response.statusCode}');
    }
  }

  // NEW: Get session-specific leaderboard
  static Future<Map<String, dynamic>> getSessionLeaderboard(String sessionId) async {
    final response = await http.get(Uri.parse('$baseUrl/games/leaderboard/session/$sessionId'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to get session leaderboard: ${response.statusCode}');
    }
  }

  // NEW: Get recent sessions leaderboard
  static Future<Map<String, dynamic>> getRecentSessionsLeaderboard({int limit = 10}) async {
    final response = await http.get(Uri.parse('$baseUrl/games/leaderboard/recent?limit=$limit'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to get recent sessions leaderboard: ${response.statusCode}');
    }
  }
}
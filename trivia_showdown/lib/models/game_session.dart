class GameSession {
  final String sessionId;
  final List<Player> players;
  final int currentQuestionIndex;
  final int totalQuestions;
  final String status;
  final String currentPlayer;

  GameSession({
    required this.sessionId,
    required this.players,
    required this.currentQuestionIndex,
    required this.totalQuestions,
    required this.status,
    required this.currentPlayer,
  });

  factory GameSession.fromJson(Map<String, dynamic> json) {
    return GameSession(
      sessionId: json['sessionId'],
      players: (json['players'] as List)
          .map((player) => Player.fromJson(player))
          .toList(),
      currentQuestionIndex: json['currentQuestionIndex'],
      totalQuestions: json['totalQuestions'],
      status: json['status'],
      currentPlayer: json['currentPlayer'],
    );
  }
}

class Player {
  final String name;
  final int score;
  final List<dynamic> answers;

  Player({
    required this.name,
    required this.score,
    required this.answers,
  });

  factory Player.fromJson(Map<String, dynamic> json) {
    return Player(
      name: json['name'],
      score: json['score'],
      answers: json['answers'],
    );
  }
}
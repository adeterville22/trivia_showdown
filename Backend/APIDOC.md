# Trivia Game Backend API Documentation

## Overview
A turn-based trivia game API where players take turns answering questions. The game progresses through each player answering the same question before moving to the next round.

---

## API Endpoints

### 1. Create New Game Session
**POST** `http://localhost:4000/api/games/`

#### Request Body
```json
{
  "playerNames": ["Alson", "Connor", "Avery", "Alysse"],
  "totalQuestions": 1,
  "category": "Mind Games",
  "difficulty": "easy"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "2796ca49-3465-4014-8617-8fb8e299b6f2",
    "players": [
      {
        "name": "Alson", "score": 0, "answers": [],
        "_id": "68ebe3b77cfeba65b868bd2a"
      },
      {
        "name": "Connor", "score": 0, "answers": [],
        "_id": "68ebe3b77cfeba65b868bd2b"
      },
      {
        "name": "Avery", "score": 0, "answers": [],
        "_id": "68ebe3b77cfeba65b868bd2c"
      },
      {
        "name": "Alysse", "score": 0, "answers": [],
        "_id": "68ebe3b77cfeba65b868bd2d"
      }
    ],
    "currentQuestion": {
      "_id": "68e6bc3a93944f41babd4200",
      "category": "Mind Games",
      "difficulty": "easy",
      "type": "multiple",
      "question": "Which number is missing: 1, 1, 2, 3, 5, 8, ?",
      "options": ["13", "11", "15", "12"]
    },
    "currentPlayer": "Alson",
    "currentQuestionIndex": 0,
    "totalQuestions": 1,
    "status": "active"
  }
}
```

---

### 2. Get Game State
**GET** `http://localhost:4000/api/games/{sessionId}`

#### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "2796ca49-3465-4014-8617-8fb8e299b6f2",
    "players": [
      // Same player structure as above
    ],
    "currentQuestion": {
      "_id": "68e6bc3a93944f41babd4200",
      "category": "Mind Games",
      "difficulty": "easy",
      "type": "multiple",
      "question": "Which number is missing: 1, 1, 2, 3, 5, 8, ?",
      "options": ["13", "12", "11", "15"]
    },
    "currentPlayer": "Alson",
    "currentQuestionIndex": 0,
    "totalQuestions": 1,
    "status": "active"
  }
}
```

---

### 3. Submit Answer
**POST** `http://localhost:4000/api/games/{sessionId}/answer`

#### Request Body
```json
{
  "playerName": "Alson",
  "answer": "13"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "2796ca49-3465-4014-8617-8fb8e299b6f2",
    "players": [
      {
        "name": "Alson",
        "score": 1,
        "answers": [
          {
            "questionId": "68e6bc3a93944f41babd4200",
            "userAnswer": "13",
            "isCorrect": true,
            "_id": "68ebe4517cfeba65b868bd3e",
            "answeredAt": "2025-10-12T17:24:33.043Z"
          }
        ],
        "_id": "68ebe3b77cfeba65b868bd2a"
      },
      // Other players remain unchanged
    ],
    "currentQuestion": {
      // Same question structure
    },
    "currentPlayer": "Connor", // Moves to next player
    "currentQuestionIndex": 0,
    "totalQuestions": 1,
    "status": "active",
    "previousAnswer": {
      "player": "Alson",
      "question": "Which number is missing: 1, 1, 2, 3, 5, 8, ?",
      "userAnswer": "13",
      "isCorrect": true
    }
  }
}
```

---

### 4. Get Final Results
**GET** `http://localhost:4000/api/games/{sessionId}/results`

#### Response
```json
{
  "success": true,
  "data": {
    "sessionId": "2796ca49-3465-4014-8617-8fb8e299b6f2",
    "players": [
      {
        "name": "Alson",
        "score": 1,
        "answers": [
          {
            "questionId": {
              "_id": "68e6bc3a93944f41babd4200",
              "category": "Mind Games",
              "difficulty": "easy",
              "type": "multiple",
              "question": "Which number is missing: 1, 1, 2, 3, 5, 8, ?",
              "correctAnswer": "13",
              "incorrectAnswers": ["11", "12", "15"],
              "explanation": "This is the Fibonacci sequence..."
            },
            "userAnswer": "13",
            "isCorrect": true,
            "_id": "68ebe4517cfeba65b868bd3e",
            "answeredAt": "2025-10-12T17:24:33.043Z"
          }
        ],
        "_id": "68ebe3b77cfeba65b868bd2a"
      },
      // Other players with their answers
    ],
    "questions": [
      {
        "_id": "68e6bc3a93944f41babd4200",
        "question": "Which number is missing: 1, 1, 2, 3, 5, 8, ?",
        "correctAnswer": "13",
        "explanation": "This is the Fibonacci sequence..."
      }
    ],
    "winner": {
      "name": "Alson",
      "score": 1
    },
    "message": "🏆 Alson wins with 1 points!"
  }
}
```

---

## Game Flow Explanation

### How the Game Works:
1. **Setup**: Create game with players, questions, category, and difficulty
2. **Turns**: Each player answers the same question in sequence
3. **Scoring**: 1 point for correct answers, 0 for incorrect
4. **Progression**: After all players answer, game moves to next question
5. **Completion**: When all questions are answered, game ends and results are available



const mongoose = require('mongoose');

const gameSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  players: [{
    name: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      default: 0
    },
    answers: [{
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      },
      userAnswer: String,
      isCorrect: Boolean,
      answeredAt: {
        type: Date,
        default: Date.now
      }
    }]
  }],
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
  currentQuestionIndex: {
    type: Number,
    default: 0
  },
  currentPlayerIndex: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['waiting', 'active', 'completed'],
    default: 'waiting'
  },
  totalQuestions: {
    type: Number,
    default: 15
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Add index for better performance
gameSessionSchema.index({ sessionId: 1 });
gameSessionSchema.index({ status: 1 });
gameSessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 }); // Auto-delete after 24 hours

module.exports = mongoose.model('GameSession', gameSessionSchema);
const express = require('express');
const router = express.Router();
const {
  createGameSession,
  submitAnswer,
  getGameState,
  getGameResults
} = require('../controllers/gameController');

router.post('/', createGameSession);
router.get('/:sessionId', getGameState);
router.post('/:sessionId/answer', submitAnswer);
router.get('/:sessionId/results', getGameResults);

module.exports = router;
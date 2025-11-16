const express = require('express');
const router = express.Router();
const {
  createGameSession,
  submitAnswer,
  getGameState,
  getGameResults, 
  getGlobalLeaderboard,
  getSessionLeaderboard,
  getRecentSessionsLeaderboard
} = require('../controllers/gameController');

router.post('/', createGameSession);
router.get('/:sessionId', getGameState);
router.post('/:sessionId/answer', submitAnswer);
router.get('/:sessionId/results', getGameResults);

// New leaderboard routes
router.get('/leaderboard/global', getGlobalLeaderboard);
router.get('/leaderboard/session/:sessionId', getSessionLeaderboard);
router.get('/leaderboard/recent', getRecentSessionsLeaderboard);

module.exports = router;
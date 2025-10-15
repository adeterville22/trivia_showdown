// routes/questions.js
const express = require('express');
const router = express.Router();
const {
  getQuestions,
  getQuestionById,
  getCategories,
  validateAnswers
} = require('../controllers/questionController.js');

router.get('/', getQuestions);
router.get('/categories', getCategories);
router.get('/:id', getQuestionById);
router.post('/validate', validateAnswers);

module.exports = router;
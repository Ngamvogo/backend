const express = require('express');
const router = express.Router();
const { generateQuiz } = require('../controllers/quizController');

// Route pour générer un QCM
router.post('/generate', generateQuiz);

module.exports = router;

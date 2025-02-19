const express = require('express');
const router = express.Router();
const { generateSummary } = require('../controllers/summaryController');

// Route pour générer un résumé
router.post('/generate', generateSummary);

module.exports = router;

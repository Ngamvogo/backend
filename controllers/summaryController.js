const { summarizeText } = require('../services/summaryService');

// Fonction pour générer le résumé
const generateSummary = (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).send('Aucun texte fourni pour résumé');
  }

  const summary = summarizeText(text);  // Appel à la fonction de résumé
  res.status(200).send({ summary });
};

module.exports = { generateSummary };

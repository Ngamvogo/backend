const { generateQuestions } = require('../services/quizService');

// Fonction pour générer un QCM
const generateQuiz = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).send('Aucun texte fourni pour générer un QCM');
  }

  const quiz = generateQuestions(text);
  res.status(200).send({ quiz });
};

module.exports = { generateQuiz };

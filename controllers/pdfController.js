const pdfParse = require('pdf-parse');

// Fonction pour analyser un fichier PDF téléchargé
const handlePdfUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).send('Aucun fichier téléchargé');
  }

  const pdfBuffer = req.file.buffer;

  pdfParse(pdfBuffer).then((data) => {
    // Le texte extrait du PDF
    const text = data.text;
    console.log(text);
    res.status(200).send({
      message: 'PDF analysé avec succès',
      extractedText: text, // Retourne le texte extrait
    });
  }).catch((err) => {
    res.status(500).send('Erreur lors de l\'analyse du PDF');
  });
};

module.exports = { handlePdfUpload };

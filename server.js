const express = require('express');
const multer = require('multer');
const path = require('path');
const pdfRoutes = require('./routes/pdfRoutes');
const summaryRoutes = require('./routes/summaryRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

// Configuration de multer pour stocker les fichiers téléchargés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Assurez-vous d'ajouter un timestamp pour éviter les conflits de noms
  },
});

const upload = multer({ storage: storage });

// Middleware pour parser les données JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/pdf', pdfRoutes);
app.use('/summary', summaryRoutes);
app.use('/quiz', quizRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

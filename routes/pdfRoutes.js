const express = require('express');
const router = express.Router();
const multer = require('multer');
const { handlePdfUpload } = require('../controllers/pdfController');

// Route pour télécharger un fichier PDF
router.post('/upload', multer().single('file'), handlePdfUpload);

module.exports = router;

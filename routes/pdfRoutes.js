const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadPDFController } = require('../controllers/pdfController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadPDFController);

module.exports = router;
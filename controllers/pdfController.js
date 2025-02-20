const { uploadPDF } = require('../services/pdfService');

const uploadPDFController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Aucun fichier envoyé." });
        }

        console.log("✅ Fichier reçu :", req.file); // Debugging

        const result = await uploadPDF(req.file);
        res.json(result);
    } catch (error) {
        console.error("❌ Erreur backend :", error.message);
        res.status(500).json({ error: error.message });
    }
};


module.exports = { uploadPDFController };

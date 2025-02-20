const { supabase, pool } = require('../config');
const pdfParse = require('pdf-parse');
const fs = require('fs');

const uploadPDF = async (file) => {
    try {
        const fileBuffer = fs.readFileSync(file.path);
        const fileName = `pdfs/${Date.now()}_${file.originalname}`;

        // 📌 Upload du fichier sur Supabase Storage
        const { data, error } = await supabase.storage
            .from(process.env.SUPABASE_BUCKET)
            .upload(fileName, fileBuffer, { contentType: file.mimetype });

        if (error) throw new Error(`Erreur d'upload Supabase: ${error.message}`);

        // 📌 Extraction du texte
        const pdfData = await pdfParse(fileBuffer);

        // 📌 Enregistrement en base de données
        const query = `
            INSERT INTO documents (file_url, extracted_text, summary, quiz) 
            VALUES ($1, $2, $3, $4) RETURNING *;
        `;
        const values = [
            `${process.env.SUPABASE_URL}/storage/v1/object/public/${data.path}`,
            pdfData.text,
            null, // Résumé sera ajouté plus tard
            null  // QCM sera ajouté plus tard
        ];

        const result = await pool.query(query, values);

        return {
            message: "PDF uploadé et enregistré avec succès",
            document: result.rows[0]
        };
    } catch (error) {
        console.error("Erreur complète :", error);
        throw error; // 🔥 Ne pas utiliser res ici, on remonte l'erreur
    }
};

module.exports = { uploadPDF };


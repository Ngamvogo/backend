// Fonction de résumé (simplifiée pour l'exemple)
const summarizeText = (text) => {
    // Cette fonction peut être améliorée avec des modèles NLP comme GPT-3 ou d'autres techniques
    const sentences = text.split('. ');
    const summary = sentences.slice(0, 3).join('. ') + '.';  // Prendre les 3 premières phrases
    return summary;
  };
  
  module.exports = { summarizeText };
  
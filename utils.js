// Retourne les fichiers requis qui manquent dans la liste présente
export const fichiersManquants = (presents, requis) => {
  return requis.filter(fichier => !presents.includes(fichier))
}

// Vérifie qu'un dossier porte le nom attendu
export const estBienNomme = (nomDossier, nomAttendu) => {
  return nomDossier === nomAttendu
}

// Construit la ligne de rapport pour un projet
export const ligneRapport = (nomProjet, estValide) => {
  const icone = estValide ? "✅" : "❌"
  return `${icone} dossier du projet ${nomProjet}`
}
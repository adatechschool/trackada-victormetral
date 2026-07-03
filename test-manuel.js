import {
  fichiersManquants,
  estBienNomme,
  ligneRapport
} from "./utils.js"

// Test 1 : un fichier manquant

const resultat1 = fichiersManquants(
  ["index.js"],
  ["index.js", "style.css"]
)

if (resultat1.length === 1 && resultat1[0] === "style.css") {
  console.log("OK — fichiersManquants détecte le fichier manquant")
} else {
  console.log("FAIL — attendu ['style.css'], reçu :", resultat1)
}

// Test 2 : aucun fichier manquant

const resultat2 = fichiersManquants(
  ["index.js", "style.css"],
  ["index.js", "style.css"]
)

if (resultat2.length === 0) {
  console.log("OK — aucun fichier manquant")
} else {
  console.log("FAIL — attendu [], reçu :", resultat2)
}

// Test 3 : nom correct

const resultat3 = estBienNomme(
  "adapage",
  "adapage"
)

if (resultat3 === true) {
  console.log("OK — nom correct")
} else {
  console.log("FAIL — attendu true")
}

// Test 4 : nom incorrect

const resultat4 = estBienNomme(
  "adapag",
  "adapage"
)

if (resultat4 === false) {
  console.log("OK — nom incorrect")
} else {
  console.log("FAIL — attendu false")
}

// Test 5 : projet valide

const resultat5 = ligneRapport(
  "adapage",
  true
)

if (resultat5 === "✅ dossier du projet adapage") {
  console.log("OK — rapport valide")
} else {
  console.log("FAIL — reçu :", resultat5)
}

// Test 6 : projet invalide

const resultat6 = ligneRapport(
  "adapage",
  false
)

if (resultat6 === "❌ dossier du projet adapage") {
  console.log("OK — rapport invalide")
} else {
  console.log("FAIL — reçu :", resultat6)
}


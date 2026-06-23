import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { homedir } from "os"

const cheminHome = homedir()

const contenuJson = readFileSync(
  "./track.json",
  "utf-8"
)

const track = JSON.parse(contenuJson)

let projetsOK = 0

track.projects.forEach((project) => {

  const cheminProjet = join(
    cheminHome,
    "ada-tech",
    "bloc1",
    "projets",
    project.name
  )

  const erreurs = []

  const existe = existsSync(cheminProjet)

  if (!existe) {
    erreurs.push("- le dossier n'existe pas ou n'est pas nommé correctement")
  }

  const gitExiste = existsSync(
    join(cheminProjet, ".git")
  )

  if (!gitExiste) {
    erreurs.push("- le repository git n'est pas initialisé")
  }

  project.required.forEach((fichier) => {

    const cheminFichier = join(
      cheminProjet,
      fichier
    )

    const fichierExiste = existsSync(cheminFichier)

    if (!fichierExiste) {
      erreurs.push(`- il manque ${fichier}`)
    }

  })

  if (erreurs.length === 0) {
    projetsOK++
    console.log(`✅ dossier du projet ${project.name}`)
  } else {
    console.log(`❌ dossier du projet ${project.name}`)

    erreurs.forEach((erreur) => {
      console.log(erreur)
    })
  }

  console.log("")

})

const total = track.projects.length

const pourcentage = Math.round(
  (projetsOK / total) * 100
)

if (pourcentage === 100) {
  console.log(
    `✅ ${pourcentage}% des projets sont initialisés correctement (${projetsOK}/${total})`
  )
} else {
  console.log(
    `❌ ${pourcentage}% des projets sont initialisés correctement (${projetsOK}/${total})`
  )
}

import {
  readFileSync,
  existsSync,
  readdirSync
} from "fs"

import { join } from "path"
import { homedir } from "os"

import {
  fichiersManquants,
  ligneRapport
} from "./utils.js"


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
    erreurs.push(
      "- le dossier n'existe pas ou n'est pas nommé correctement"
    )
  }


  if (existe) {
    const gitExiste = existsSync(
      join(cheminProjet, ".git")
    )

    if (!gitExiste) {
      erreurs.push(
        "- le repository git n'est pas initialisé"
      )
    }


    const fichiersPresents = readdirSync(
      cheminProjet
    )


    const fichiersAbsents = fichiersManquants(
      fichiersPresents,
      project.required
    )


    fichiersAbsents.forEach((fichier) => {
      erreurs.push(
        `- il manque ${fichier}`
      )
    })
  }


  const projetValide = erreurs.length === 0


  console.log(
    ligneRapport(
      project.name,
      projetValide
    )
  )


  if (projetValide) {
    projetsOK++
  } else {
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
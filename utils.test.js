import {
  fichiersManquants,
  estBienNomme,
  ligneRapport
} from "./utils.js"

describe("fichiersManquants", () => {
  it("retourne un tableau vide si rien ne manque", () => {
    expect(
      fichiersManquants(
        ["a.js", "b.js"],
        ["a.js"]
      )
    ).toEqual([])
  })

  it("retourne plusieurs fichiers manquants", () => {
    expect(
      fichiersManquants(
        ["a.js"],
        ["a.js", "b.js", "c.js"]
      )
    ).toEqual(["b.js", "c.js"])
  })
})

describe("estBienNomme", () => {
  it("retourne true si le nom correspond", () => {
    expect(
      estBienNomme("adapage", "adapage")
    ).toBe(true)
  })

  it("retourne false si le nom ne correspond pas", () => {
    expect(
      estBienNomme("adapag", "adapage")
    ).toBe(false)
  })
})

describe("ligneRapport", () => {
  it("retourne la ligne correcte pour un projet valide", () => {
    expect(
      ligneRapport("adapage", true)
    ).toBe("✅ dossier du projet adapage")
  })

  it("retourne la ligne correcte pour un projet invalide", () => {
    expect(
      ligneRapport("adapage", false)
    ).toBe("❌ dossier du projet adapage")
  })
})
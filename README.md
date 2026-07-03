# Trackada

Trackada est un outil en ligne de commande développé en Node.js pur.

Il permet de vérifier que les projets Ada sont bien présents sur l'ordinateur, au bon endroit, avec les fichiers demandés et un dépôt Git initialisé.

## Fonctionnalités

- Lecture du fichier `track.json`
- Vérification de l'existence des dossiers projets
- Vérification de l'initialisation Git avec le dossier `.git`
- Vérification des fichiers obligatoires pour chaque projet
- Affichage des erreurs avec des tirets
- Calcul du pourcentage de projets correctement initialisés
- Tests manuels des fonctions principales
- Tests automatisés avec Jest

## Installation

Après avoir cloné le projet, installe les dépendances :

```bash
npm install
```

## Lancer le projet

```bash
node checktrack.js
```

## Lancer les tests manuels

```bash
node test-manuel.js
```

## Lancer les tests Jest

```bash
npm test
```

## Fonctions testées

- `fichiersManquants`
- `estBienNomme`
- `ligneRapport`
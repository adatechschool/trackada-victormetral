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

## Lancer le projet

Dans le terminal :

```bash
node checktrack.js

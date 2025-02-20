
const fs = require('fs');  // Importe le module 'fs' (File System) de Node.js qui permet de manipuler le système de fichiers.

fs.mkdir('./image', (erreur) => {  // Utilise la méthode 'mkdir' pour créer un répertoire (dossier) appelé "image" dans le répertoire courant.
    if (erreur) {  // Si une erreur se produit lors de la création du répertoire, elle sera capturée ici.
        console.log(erreur);  // Affiche l'erreur dans la console.
    } else {  // Si aucune erreur ne se produit (le répertoire a été créé avec succès),
        console.log("fichier créé avec succès");  // Affiche un message de succès dans la console.
    }
});

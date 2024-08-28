# Quizz Challenge

Bienvenue dans ce challenge ! Le but est de développer une petite application de quiz interactive.

## Description

Ce dépôt contient les fichiers nécessaires pour créer une application de quiz simple. Vous trouverez un fichier `exos.js` (situé dans le dossier `js`) qui contient la logique du quiz, ainsi qu'un fichier `index.html` qui charge et exécute le script JavaScript.

## Instructions

1. **Préparation du Projet :**

   - Clonez ce dépôt sur votre machine locale.
   - Ouvrez le fichier `index.html` dans un navigateur pour exécuter et tester votre code.

2. **Édition du Code :**
   - Tout votre code doit être écrit dans le fichier `exos.js`.
   - Pour vérifier le bon fonctionnement de votre application, rafraîchissez la page dans votre navigateur après chaque modification.

## Exercices

### Exercice 1 - Préparer le terrain

1. Créez une variable `question1` qui contiendra la chaîne de caractères :  
   `Quelle mer borde la ville de Sébastopol ?`
2. Créez ensuite une variable `solution1` qui contiendra la réponse à cette question. _(Indice : la réponse est "la mer Noire")_.

### Exercice 2 - Posez votre question

1. Affichez la question contenue dans la variable `question1` à l'utilisateur via une boîte de dialogue.
2. Stockez la réponse de l'utilisateur dans une variable `reponse1`.
3. Testez la réponse de l'utilisateur :
   - Si la réponse est correcte, affichez une alerte avec le message `Gagné !`.
   - Sinon, affichez `Perdu...`.

### Exercice 3 - La question à 10 000 Pesetas

1. Répétez les étapes des exercices précédents avec une nouvelle question :

   - Créez une variable `question2` avec comme contenu :  
     `Quel est l'âge du capitaine ?`.
   - Créez une variable `solution2` qui contiendra `63`.
   - Demandez la réponse de l'utilisateur, puis testez-la.

   _Note : n'oubliez pas que la fonction `prompt` renvoie toujours une chaîne de caractères. Utilisez `parseInt` pour convertir la réponse en nombre si nécessaire._

### Bonus - Compteur de bonnes réponses

1. Trouvez un moyen de compter le nombre de bonnes réponses de l'utilisateur.
2. Une fois toutes les questions posées, affichez un message du type "Vous avez X bonnes réponses".

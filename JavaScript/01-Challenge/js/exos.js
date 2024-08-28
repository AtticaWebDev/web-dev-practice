// Exo 1
var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "La mer Noire";

// Exo 2

do {
  var reponse1 = prompt(question1);
} while (reponse1 == "" || reponse1 == null);

if (reponse1 === solution1) {
  alert("Bonne réponse !");
} else {
  alert("Mauvaise réponse. La bonne réponse est : " + solution1);
}

// Exo 3

var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;

do {
  var reponse2 = prompt(question2);
  reponse2 = parseInt(reponse2);
} while (isNaN(reponse2) === "" || reponse2 === null);

if (reponse2 === solution2) {
  alert("Bonne réponse !");
} else {
  alert("Mauvaise réponse. La bonne réponse est : " + solution2);
}

// BONUS a faire plus tard

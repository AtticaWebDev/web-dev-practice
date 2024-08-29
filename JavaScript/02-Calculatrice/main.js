// CHOIX DU MODE
var choix;

do {
  choix = prompt(
    "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division"
  );

  choix = Number(choix);
} while (isNaN(choix) || choix < 1 || choix > 4);

// DEMANDE A L'UTILISATEUR D'ENTRER DEUX NOMBRE
var premierNombre, deuxiemeNombre;
do {
  premierNombre = prompt("Veuillez entrer un premier nombre : ");
  if (premierNombre !== null && premierNombre.trim() !== "") {
    premierNombre = Number(premierNombre);
  }
} while (
  isNaN(premierNombre) ||
  premierNombre === null ||
  premierNombre === ""
);

do {
  deuxiemeNombre = prompt("Veuillez entrer un deuxième nombre : ");
  if (deuxiemeNombre !== null && deuxiemeNombre.trim() !== "") {
    deuxiemeNombre = Number(deuxiemeNombre);
  }
} while (
  isNaN(deuxiemeNombre) ||
  deuxiemeNombre === null ||
  deuxiemeNombre === ""
);

// FONCTION QUI PERMET DE FAIRE LE CALCULE
// Addition
function addition(nb1, nb2) {
  return nb1 + nb2;
}

// Multiplication
function multiplication(nb1, nb2) {
  return nb1 * nb2;
}

// Soustraction
function soustraction(nb1, nb2) {
  return nb1 - nb2;
}

// Division
function division(nb1, nb2) {
  return nb1 / nb2;
}

// APPELER LA FONCTION A L'UTILISER

var resultat;

switch (choix) {
  case 1:
    resultat = addition(premierNombre, deuxiemeNombre);

    break;
  case 2:
    resultat = multiplication(premierNombre, deuxiemeNombre);

    break;
  case 3:
    resultat = soustraction(premierNombre, deuxiemeNombre);

    break;
  case 4:
    resultat = division(premierNombre, deuxiemeNombre);

    break;

  default:
}

alert("Le resultat est " + resultat);

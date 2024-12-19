/**********************************************************************************************************************************************/
/* CREATION DE MES DONNES */
/**********************************************************************************************************************************************/
//alert("kakou kakou script ok");
/* création du style de construction = tableau */
let allStyles = ["victorien", "campagne", "gothique", "New Empire", "cottage", "mid century", "moderne",
    "maison de sorcière", "maison de loup garou", "maison de vampire", "mini-maison", "appartement", "terrain communautaire",
    "boulangerie", "café", "restaurant", "musée", "karaoké", "magasin", "cinéma", "sauna", "boîte de nuit", "location", "salle de sport"
];
/* création des couleurs = tableau */
let allColors = ["rouge", "orange", "rose", "jaune", "vert", "bleu", "violet", "gris", "noir", "blanc", "marron clair", "marron foncé"];
/* création du lot = tableau */
let allLots = ["20x15", "20x20", "30x20", "30x30", "30x40", "40x40", "50x50", "64x64", "40x20", "50x40", "64x64"];

/* création des packs = tableau */
//les packs sont cochés par défaut et ajouter au tableau packsPossedes
let packsPossedes = [];
let checkedpacks = document.querySelectorAll("#packs-possedes input[type='checkbox']:checked");
//console.log(checkedpacks);
// boucle for
for (let box of checkedpacks) {
    // si la boite est cochée
    if (box.checked) {
        // Ajouter l'élément au tableau avec son attribut name
        packsPossedes.push(box.name);
    }
}

/**********************************************************************************************************************************************/
/* AFFICHAGE DU RANDOM CHALLENGE */
/**********************************************************************************************************************************************/
/* bouton retour */
let btnReturn = document.getElementById("btn-return");
btnReturn.addEventListener("click", () => {
    window.location.href = "./index.html";
});

/* Création du bouton generer */
let buttonGenerer = document.querySelector("#btn-generer");
let generersection = document.querySelector("#generer-section");
let packspossedessection = document.querySelector("#packspossedes-section");

/* cacher section "generer-section" avant de cliquer sur le btn */
//fonction : je prends toutes les sections et je boucle sur toutes celles
//qui ne sont pas celle de affichagechallegne-section
function hideAllSections() {
    document.querySelectorAll("section").forEach((section) => {
        if (section.id != "affichage-challenge-section")
            section.style.display = "none";
    });
}
//fonction pour afficher la section du random challenge
function displaySection() {
    document.getElementById("generer-section").style.display = "block";
    document.getElementById("btn-return").style.display = "inline-block";
}
//j'ajoute un addEventListener
buttonGenerer.addEventListener("click", () => {
    //je cache la section packspossedessection
    hideAllSections(packspossedessection);
    // j'affiche tout le reste
    displaySection();
    //je change le texte du btn pour un NOUVEAU challenge
    buttonGenerer.textContent = "Générer un nouveau challenge";

    /* affichage de la div resultats #affichage-challenge-div */

    //je récupère touts les ID pour créer la div resultalt
    let resultatStyle = document.getElementById("resultat-style");
    let resultatLot = document.getElementById("resultat-lot");

    let resultatColor = document.getElementById("resultat-color");
    let resultatColor1 = document.getElementById("resultat-color1");
    let resultatPiece = document.getElementById("resultat-piece");
    let resultatPersonne = document.getElementById("resultat-personne");
    let resultatBudget = document.getElementById("resultat-budget");

    /* récupération du nb de packs pour le challenge (1/2/3) */
    let select = document.getElementById("nb-pack").value;
    //console.log(select);

    /* récupération check si options supplémentaires */
    //let moreOption = document.querySelectorAll("input[type=checkbox].more-option");

    /* Création du style de construction*/
    let indexStyle = Math.floor(Math.random() * allStyles.length);
    let randomStyle = allStyles[indexStyle];
    // console.log("Style de maison: ", randomStyle);

    /* Création du lot*/
    let indexLot = Math.floor(Math.random() * allLots.length);
    let randomLot = allLots[indexLot];
    // console.log("Sur un lot de: ", randomLot);

    /* Création des couleurs à utiliser*/
    let indexColor = Math.floor(Math.random() * allColors.length);
    let indexColor1 = Math.floor(Math.random() * allColors.length);
    let randomColor = allColors[indexColor];
    let randomColor1 = allColors[indexColor1];
    // console.log("Couleurs: ", randomColor, randomColor1);

    /* Création du nb pièce : entre 2 et 15*/
    let randomPiece = Math.floor(2 + 13 * Math.random());
    // console.log("Nb pièces: ", randomPiece);

    /* Création  du nb personnes : entre 1 et 8*/
    let randomPersonne = Math.floor(1 + 7 * Math.random());
    // console.log("Nb personne(s): ", randomPersonne);

    /* Création du budget entre: entre 1000 et 10 000 000*/
    let randomBudget = Math.floor(1000 + (10000000 - 1000) * Math.random());
    // console.log("Budget: ", randomBudget);

    /* affichage des résultats (hors randompack)*/
    resultatStyle.textContent = `${randomStyle}`;
    resultatLot.textContent = `${randomLot}`;
    resultatColor.textContent = `${randomColor}`;
    resultatColor1.textContent = `${randomColor1}`;
    resultatPiece.textContent = `${randomPiece}`;
    resultatPersonne.textContent = `${randomPersonne}`;
    resultatBudget.textContent = `${randomBudget}`;
    // console.log(packsPossedes);
    affichagedupack(select);
});
/* affichage des résultats randompack*/

let resultatPack1 = document.getElementById("resultat-pack1");
let resultatPack2 = document.getElementById("resultat-pack2");
let resultatPack3 = document.getElementById("resultat-pack3");

//fonction pour afficher le(s) résultat(s) randompack
function affichagedupack(option) {

    // Fonction pour obtenir un pack aléatoire différent à chaque fois
    function getRandomPack() {
        return packsPossedes[Math.floor(Math.random() * packsPossedes.length)];
    }

    // Variables pour chaque pack avec des valeurs aléatoires différentes
    let randomise1 = getRandomPack();
    let randomise2 = getRandomPack();
    let randomise3 = getRandomPack();

    // Création d'un span pour Pack2
    let spanOption2 = document.createElement("span");
    spanOption2.className = "simsfont";

    // Création d'un span pour Pack3
    let spanOption3 = document.createElement("span");
    spanOption3.className = "simsfont";

    // Gestion des cas
    switch (option) {
        case "1":
            // Ajout de resultatPack1
            resultatPack1.textContent = ` ${randomise1}`;
            break;

        case "2":
            // Ajout de resultatPack1
            resultatPack1.textContent = ` ${randomise1}`;

            // Ajout de resultatPack2
            spanOption2.textContent = ` ${randomise2}`;
            resultatPack2.textContent = ", "; // Texte fixe
            resultatPack2.appendChild(spanOption2);
            break;

        case "3":
            // Ajout de resultatPack1
            resultatPack1.textContent = ` ${randomise1}`;

            // Ajout de resultatPack2
            spanOption2.textContent = ` ${randomise2}`;
            resultatPack2.textContent = ", ";
            resultatPack2.appendChild(spanOption2);

            // Ajout de resultatPack3
            spanOption3.textContent = ` ${randomise3}`;
            resultatPack3.textContent = ", ";
            resultatPack3.appendChild(spanOption3);
            break;

        default:
            // Valeur par défaut si aucun pack sélectionné
            resultatPack1.textContent = "Aucun pack sélectionné";
            break;
    }
}
/**********************************************************************************************************************************************/
/* CREATION DES BTNS CONNEXION */
/**********************************************************************************************************************************************/
/* bouton login */
let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
    window.location.href = "./login.html";
});

/* bouton register */
let registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", () => {
    window.location.href = "./register.html";
});

/**********************************************************************************************************************************************/
/* SAUVEGARDER CE CHALLENGE */
/**********************************************************************************************************************************************/
/* btn save-challenge-btn */
let SaveBtn = document.getElementById("save-challenge-btn");
// comment faire pour dire que le user est connecté?
SaveBtn.addEventListener('click', () => {
    document.location.href = "./login.html";
    });
// si user pas connecté alors
// if (!isConnected) {
//     // btn save-challenge-btn renvoie sur page connexion 
//     SaveBtn.addEventListener('click', () => {
//     document.location.href = "./login.html";
//     });
// } else {
//     // sinon
//     // btn save-challenge-btn est clickable déclenche function saveChallenge()
//     SaveBtn.addEventListener('click', () => {
//         saveChallenge();
//     });

// }

// let affichageChallegneDiv = document.getElementById("affichage-challenge-div");
// const dataSave = {
//     "resultatPack1": resultatPack1,
//     "resultatPack2": resultatPack2,
//     "resultatPack3": resultatPack3,
//     "couleur": resultatColor,
//     "couleur1": resultatColor1,
//     "nb-piece": resultatPiece,
//     "foyer": resultatPersonne,
//     "budget": resultatBudget,
//     "lot": resultatLot,
// };

// let dataSaveStringify = JSON.stringify(dataSave);
// let dataSaveParse = JSON.parse(dataSave);
// console.log("dataSaveStringify");
// console.log(dataSaveStringify);

// function saveChallenge() {
//     //enregistrer la div affichage-challenge-div
//     // utiliser un object?
//     // récupérer directement la div?
// }





/**********************************************************************************************************************************************/

/*
    question "pour plus tard":
    j'ai fait une BDD avec la map du jeu => il y a le nom du lot et le monde dans le quel il se trouve.
 
    -Est ce que c'est possible de transformer la bdd en un json et use un fecth dessus?
    -ou est ce que c'est possible de relier la BDD directement et faire un fecth?
 
*/
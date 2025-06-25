// Ingrédients pour jouer au jeu du Chifumi
const tabActions = ["Plantes", "Feu", "Eau"];
let actionJoueur1 = "";
let actionJoueur2 = "";
let resultat = "";
let cptVictoireJoueur1 = 0;
let cptVictoireJoueur2 = 0;
// let audio = new Audio("../musique/FairyTail_Main_Theme.mp3"); audio.play();

// Fonction pour que les deux joueurs jouent une action
function jouerAction(action) {
    if (action == "Plantes") {
        actionJoueur1 = tabActions[0];
    } else if (action == "Feu") {
        actionJoueur1 = tabActions[1];
    } else if (action == "Eau") {
        actionJoueur1 = tabActions[2];
    }

    console.log("Action joueur 1 : " + actionJoueur1);

    let nbAleatoire = Math.floor(Math.random() * 3);
    actionJoueur2 = tabActions[nbAleatoire];

    console.log("Action joueur 2 : " + actionJoueur2);

    if (actionJoueur1 == actionJoueur2) {
        resultat = "Egalité ! :)";
        document.getElementById("resultat").innerText = resultat;
    } else if (actionJoueur1 == tabActions[0] && actionJoueur2 == tabActions[1]) {
        resultat = "Le joueur 2 gagne avec la magie du " + tabActions[1] + " contre le joueur 1 avec la magie des " + tabActions[0] + " ! ";
        document.getElementById("resultat").innerText = resultat;
        cptVictoireJoueur2++;
        document.getElementById("cptVictoireJoueur2").innerText = Number(cptVictoireJoueur2);
    } else if (actionJoueur1 == tabActions[0] && actionJoueur2 == tabActions[2]) {
        resultat = "Le joueur 1 gagne avec la magie des " + tabActions[0] + " contre le joueur 2 avec la magie de l' " + tabActions[2] + " ! ";
        document.getElementById("resultat").innerText = resultat;
        cptVictoireJoueur1++;
        document.getElementById("cptVictoireJoueur1").innerText = Number(cptVictoireJoueur1);
    } else if (actionJoueur1 == tabActions[1] && actionJoueur2 == tabActions[0]) {
        resultat = "Le joueur 1 gagne avec la magie du " + tabActions[1] + " contre le joueur 2 avec la magie des " + tabActions[0] + " ! ";
        document.getElementById("resultat").innerText = resultat;
        cptVictoireJoueur1++;
        document.getElementById("cptVictoireJoueur1").innerText = Number(cptVictoireJoueur1);
    } else if (actionJoueur1 == tabActions[2] && actionJoueur2 == tabActions[0]) {
        resultat = "Le joueur 2 gagne avec la magie des " + tabActions[0] + " contre le joueur 1 avec la magie de l' " + tabActions[2] + " ! ";
        document.getElementById("resultat").innerText = resultat;
        cptVictoireJoueur2++;
        document.getElementById("cptVictoireJoueur2").innerText = Number(cptVictoireJoueur2);
    } else if (actionJoueur1 == tabActions[1] && actionJoueur2 == tabActions[2]) {
        resultat = "Le joueur 2 gagne avec la magie de l' " + tabActions[2] + " contre le joueur 1 avec la magie du " + tabActions[1] + " ! ";
        document.getElementById("resultat").innerText = resultat;
        cptVictoireJoueur2++;
        document.getElementById("cptVictoireJoueur2").innerText = Number(cptVictoireJoueur2);
    } else if (actionJoueur1 == tabActions[2] && actionJoueur2 == tabActions[1]) {
        resultat = "Le joueur 1 gagne avec la magie de l' " + tabActions[2] + " contre le joueur 2 avec la magie du " + tabActions[1] + " ! ";
        document.getElementById("resultat").innerText = resultat;
        cptVictoireJoueur1++;
        document.getElementById("cptVictoireJoueur1").innerText = Number(cptVictoireJoueur1);
    }
}
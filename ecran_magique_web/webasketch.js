
let couleur = 'black';
let clique = true;

function choisirTaille(taille) {
    let grille = document.querySelector('.grille');
    let carre = grille.querySelectorAll('div');
    carre.forEach((div) => div.remove());

    grille.style.gridTemplateColumns = `repeat(${taille} , 1fr)`;
    grille.style.gridTemplateRows = `repeat(${taille} , 1fr)`;

let nombre = taille * taille ;

for (let i = 0; i < nombre; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', couleurCarre)
    square.style.backgroundColor = 'white';
    grille.insertAdjacentElement('beforeend', square);
    }
}

choisirTaille(16);
let erreur = document.querySelector(".erreur");

function changerTaille(input) {
    if (input >= 2 && input <= 100) {
    choisirTaille(input); 
    } else {
    erreur.textContent = "wsh tu joue a quoi le sang ?? La valeur doit être comprise entre 2 et 100";
    }
}

function couleurCarre() {
    if (clique) {
           if (couleur === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = couleur;
    }
    }
}

function changerLaCouleur(choix) {
    couleur = choix;
}

function effacerLaGrille() {
    let grille = document.querySelector('.grille');
    let carre = grille.querySelectorAll('div');
    carre.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e)=> {
    if (e.target.tagName != "BUTTON") {
            clique = !clique;
    }
})
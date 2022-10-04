// basic math operators
function add(a,b) {
    return document.getElementById('affichage').innerHTML = a + b;
}

function substract(a,b) {
    return document.getElementById('affichage').innerHTML = a - b;
}

function multiply(a,b) {
    return document.getElementById('affichage').innerHTML = a * b;
}

function divide(a,b) {
    return document.getElementById('affichage').innerHTML = a / b;
}

function toutEffacer() {
      document.getElementById('affichage').innerHTML = "";
}

// 1) l'utilisateur clique sur les bouttons pour écrire son opération

function afficherValeurs(valeur) {
    if (valeur === undefined) {
        document.getElementById('affichage').innerHTML = "";
    } else {
        return document.getElementById('affichage').innerHTML += `${valeur}`;
    }
}    

// 3) calculer avec valeurs définies
function operate() {
    let calcul = document.getElementById('affichage').innerHTML;
    let a = parseInt(calcul); 

    let resteValeurs = String(calcul).replace(`${a}`, ""); 
    let resteArr = [];

for (let i=0; i < resteValeurs.length; i++) {
        resteArr.push(resteValeurs[i])
}

let oper = resteArr[0];
let b = parseInt(resteArr.splice(1).join(""));

console.log(oper);
console.log(b);

if (oper === '+') {
    add(a,b);
} else if (oper === '-') {
    substract(a,b);
} else if (oper === '/') {
    divide(a,b);
 } else if (oper === '*') {
    multiply(a,b);
 }
}
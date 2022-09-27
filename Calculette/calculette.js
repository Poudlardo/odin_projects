
// basic math operators
function add(a,b) {
 return a + b;

}

function substract(a,b) {
    return a - b;
}


function multiply(a,b) {
    return a * b;
}


function divide(a,b) {
    return a / b;
}

// call one above function on the numbers
function operate(operator,a,b) {
    if (operator === "+") {
        console.log(add(a,b));
    } else if (operator === "-") {
        console.log(substract(a,b));
    } else if (operator === "*"){
        console.log(multiply(a,b));
    } else if (operator === "/") {
        console.log(divide(a,b));
    }
}

function afficherValeurs(valeur) {
    let afficher = document.querySelector("#affichage");
        afficher.textContent = `${valeur}`;
}

function toutEffacer() {

}
let gameboardModule = (() => {
    let gameboard = [' ',' ',' ',
                     ' ',' ',' ',
                     ' ',' ',' '];
    return {gameboard};
})();



// refaire les condtions en fonction de celui qui commence, à determiner 
let displayControllerModule = (e)=> {

    let gameboardStr = gameboardModule.gameboard.join('');
    let matchGameboardValues = gameboardStr.match(/[A-Z]/)
    let valuesNumber = matchGameboardValues.length;

    if (gameboardModule.gameboard.includes("X") === false && gameboardModule.gameboard.includes("O") === false) { // la grille est vide, déterminer qui joue en premier 
        randomStart();
        if (firstPlayer === 0) {
            e.innerHTML = 'X';
        } else {
            e.innerHTML = 'O';
        }
    } else if ((firstPlayer === 0 && valuesNumber % 2 !== 0) || (firstPlayer === 1 && valuesNumber % 2 == 0))  { 
        e.innerHTML = "O";
    } else if ((firstPlayer === 0 && valuesNumber % 2 == 0) || (firstPlayer === 1 && valuesNumber % 2 !== 0)) {
        e.innerHTML = "X";
    }
    }

let countValuesInGameboard = (assignedXO) => {
   return gameboardModule.gameboard.filter(value => value === assignedXO).length ;
}

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log('This is the name of player' + playerNumber + '....' + playerName); }
    return {playerName,playerNumber, assignedXO};
};

const joueurUn = document.getElementById('joueurUn').innerHTML;
const joueurDeux = document.getElementById('joueurDeux').innerHTML;
const playerOne = createPlayer(joueurUn, 0, "X");
const playerTwo = createPlayer(joueurDeux, 1, "O");

function randomStart() {
    const joueurUnOuDeux = [0,1];
    let joueurUodLength = joueurUnOuDeux.length;
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*joueurUodLength);
    let firstPlayer = joueurUnOuDeux[randomNumber];
    return firstPlayer;
}

function renderArrayToGameBoard() {
    for (i=0;i < gameboardModule.gameboard.length;i++) {
       gameboardModule.gameboard[i] = document.querySelectorAll('.grid-box')[i].textContent ;
    }
    console.log(gameboardModule.gameboard);
    return gameboardModule.gameboard;
}

let addMarkToGameBoardArray = (() => {
    const divs = document.querySelectorAll('.grid-box');
    Array.from(divs).forEach(e => {
    e.addEventListener('click', displayControllerModule(e))
    })
})()
 
function deuxSale() {
    console.log('sskuuur');
}

(function theWinnerIs() {
    let gameboardStr = gameboardModule.gameboard.join('');
    for (i=0;i<gameboardStr.length;i++){
        if (/XXX/.test(gameboardStr) || /OOO/.test(gameboardStr)) { // horizontal winning case
            return alert('Bravo, finito pipo ! c\'est gagné!');
        } else if (/X\D{2}X\D{2}X/.test(gameboardStr) || /O\D{2}O\D{2}O/.test(gameboardStr)) {  // vertical winning case
            return alert('Bravo, finito pipo ! c\'est gagné!');
        } else if (/^X\D{3}X\D{3}X$/.test(gameboardStr) || /^O\D{3}O\D{3}O$/.test(gameboardStr)) { // first diagonal winning case
            return alert('Bravo, finito pipo ! c\'est gagné!');
        } else if (/^D{2}X\DX\DX\D{3}$/.test(gameboardStr) || /^O\D{3}O\D{3}O$/.test(gameboardStr)) { // second diagonal winning case 
            return alert('Bravo, finito pipo ! c\'est gagné!');
        }
    }
})()
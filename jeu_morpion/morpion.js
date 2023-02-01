let gameboardModule = (() => {
    let gameboard = [' ',' ',' ',
                     ' ',' ',' ',
                     ' ',' ',' '];
    return {gameboard};
})();

let firstPlayerFunc = (() => {
    const joueurUnOuDeux = [0,1];
    let joueurUodLength = joueurUnOuDeux.length;
    let randomNumber = Math.floor(Math.random()*joueurUodLength);
    let firstPlayer = joueurUnOuDeux[randomNumber];
    return {firstPlayer};
})()

// action au lancement de la partie
let submitData = document.getElementById('commencer');
submitData.addEventListener('click', startGame);

function startGame() {

const joueurUn = document.getElementById('joueurUn').value;
const joueurDeux = document.getElementById('joueurDeux').value;

const playerOne = createPlayer(joueurUn, 0, "X");
const playerTwo = createPlayer(joueurDeux, 1, "O");

const showform = document.getElementById('showform');
showform.style.display = 'none';

    if (joueurUn == "" || joueurDeux =="") {
            return;
        }

    if (firstPlayerFunc.firstPlayer == playerOne.playerNumber) {
        const formarea = document.getElementById('formarea');
        formarea.textContent = `${joueurUn} tu commences !`;
        return firstPlayerFunc.firstPlayer;
    } else if (firstPlayerFunc.firstPlayer == playerTwo.playerNumber) {
        const formarea = document.getElementById('formarea');
        formarea.textContent = `${joueurDeux} tu commences !`;
        return firstPlayerFunc.firstPlayer
    }
}

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log('This is the name of player' + playerNumber + '....' + playerName); }
    return {playerName,playerNumber, assignedXO};
};

// refaire les condtions en fonction de celui qui commence, à determiner 
let displayControllerModule = (e)=> {
    if (e.target.innerHTML !== ' ') {
        window.alert('Cette case a déjà été joué');
        } else if (countValuesInGameboard.assignedXO == null && firstPlayerFunc.firstPlayer === 0) {
            e.target.innerHTML = "X";
        } else if (countValuesInGameboard.assignedXO == null && firstPlayerFunc.firstPlayer === 1) {
            e.target.innerHTML = "O";
        }else if ((firstPlayerFunc.firstPlayer === 0 && countValuesInGameboard % 2 !== 0) || (firstPlayerFunc.firstPlayer === 1 && countValuesInGameboard % 2 == 0))  { 
        e.target.innerHTML = "O";
    }   else if ((firstPlayerFunc.firstPlayer === 0 && countValuesInGameboard % 2 == 0) || (firstPlayerFunc.firstPlayer === 1 && countValuesInGameboard % 2 !== 0)) {
        e.target.innerHTML = "X";
    }
}

let countValuesInGameboard = (() => {
    let boxesArr = [];
    let divs = document.querySelectorAll('.grid-box').forEach(function(e){
        boxesArr.push(e.innerHTML);
    });
    const boxesStr = boxesArr.join('');
    let assignedXO = boxesStr.match(/[A-Z]/g);
    if (assignedXO === null) {
        return 0;
      }
      console.log(assignedXO.length)
   return assignedXO.length
})()

let renderArrayToGameBoardfunction = (() => {
    const divBoxes = document.querySelectorAll('.grid-box');
    const boxesArr = Array.from(divBoxes);

    for (i=0;i < boxesArr.length;i++) {
      gameboardModule.gameboard.splice(i, 1, boxesArr[i]);
    }
    console.log(gameboardModule.gameboard)
    return gameboardModule.gameboard;
})

let addMarkToGameBoardArray = (() => {
    const divsBoxes = document.querySelectorAll('.grid-box');
    Array.from(divsBoxes).forEach(el => {
    el.addEventListener('click', displayControllerModule)
    })
})()
 
let theWinnerIs = (() => {
    let gameboardStr = gameboardModule.gameboard.join('');
    for (i=0;i<gameboardStr.length;i++){
        if (/XXX/.test(gameboardStr) || /OOO/.test(gameboardStr)) { // horizontal winning case
            return windows.alert('Bravo, finito pipo ! c\'est gagné!');
        } else if (/X\D{2}X\D{2}X/.test(gameboardStr) || /O\D{2}O\D{2}O/.test(gameboardStr)) {  // vertical winning case
            return windows.alert('Bravo, finito pipo ! c\'est gagné!');
        } else if (/^X\D{3}X\D{3}X$/.test(gameboardStr) || /^O\D{3}O\D{3}O$/.test(gameboardStr)) { // first diagonal winning case
            return windows.alert('Bravo, finito pipo ! c\'est gagné!');
        } else if (/^D{2}X\DX\DX\D{3}$/.test(gameboardStr) || /^O\D{3}O\D{3}O$/.test(gameboardStr)) { // second diagonal winning case 
            return windows.alert('Bravo, finito pipo ! c\'est gagné!');
        }
    }
})()


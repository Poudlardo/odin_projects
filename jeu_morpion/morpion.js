let gameboardModule = (() => {
    let gameboard = [' ',' ',' ',
                     ' ',' ',' ',
                     ' ',' ',' '];
    return {gameboard};
})();

let displayControllerModule = ()=> {
    if (countValuesInGameboard(playerOne.assignedXO) === 0 && countValuesInGameboard(playerTwo.assignedXO) === 0) {                                                     // le cas ou la grille est vide
        div.innerHTML = 'X' // ou '${playerOne.assignedXO}' p     --> X représente ici ce que le joueur1 (celui qui commence) a choisi dans son input
        renderArrayToGameBoard();
    } else if (countValuesInGameboard(playerOne.assignedXO) > countValuesInGameboard(playerTwo.assignedXO)) {                                                           // le cas ou 
        div.innerHTML = 'O'; // ou '${playerTwo.assignedXO}' p     --> X représente ici ce que le joueur1 (celui qui commence) a choisi dans son input
        renderArrayToGameBoard();
    } else if (countValuesInGameboard(playerOne.assignedXO) === countValuesInGameboard(playerTwo.assignedXO)) {
        div.innerHTML = 'X' // ou '${playerOne.assignedXO}' p     --> X représente ici ce que le joueur (celui qui commence) a choisi dans son input
        renderArrayToGameBoard();
    };
    }

let countValuesInGameboard = (assignedXO) => {
   return gameboardModule.gameboard.filter(value => value === assignedXO).length  
}

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log('This is the name of player' + playerNumber + '....' + playerName); }
    return {playerName,playerNumber, assignedXO};
};


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
    e.addEventListener('click', (e) => {
        e.currentTarget.innerHTML = "sluuur";
    })
    })
})()
 
function deuxSale() {
    console.log('sskuuur')
}

(function theWinnerIs() {
    const gameboardStr = gameboardModule.gameboard.join('');
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
let gameboardModule = (() => {
    let gameboard = ['','','','','','','','',''];
    return {gameboard};
})();

let displayControllerModule = ()=> {
    if (theWinnerIs() === true) {
        return alert('Bravo ! c\'est gagné!');
    } else if (count[playerOne.assignedXO] === 0 && count[playerTwo.assignedXO === 0]) {
        // joueur 1 qui joue
    } else if (count[playerOne.assignedXO] > count[playerTwo.assignedXO]) {
        // joueur 2 qui joue
    } else if (count[playerOne.assignedXO] == count[playerTwo.assignedXO]) {
        // joueur 1 qui joue
    };
    }

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log('This is the name of player' + playerNumber + '....' + playerName); }
    return {playerName,playerNumber, assignedXO};
};


(function renderArrayToGameBoard() {
    for (i=0;i < gameboardModule.gameboard.length;i++) {
       gameboardModule.gameboard[i] = document.querySelectorAll('.grid-box')[i].textContent ;
    } 
})()

let addMarkToGameBoardArray = (() => {
    const divs = document.querySelectorAll('.grid-box');
    Array.from(divs).forEach(div => {
    div.addEventListener('click', displayControllerModule);
    });
})()

(function theWinnerIs() {

})()
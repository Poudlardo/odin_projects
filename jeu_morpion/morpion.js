let gameboardModule = (() => {
    let gameboard = ['X', 'O','X','X','O','O','O','X','X'];
    return {gameboard};
})();

let displayControllerModule = (()=> {
    // put logic here
})();

let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log('This is the name of player' + playerNumber + '....' + playerName); }
    return {getPlayerName,playerName,playerNumber, assignedXO};
};

let Mohamed = createPlayer('Mohamed', 1, 'X');
let Fabrice = createPlayer('Fabrice', 2, '0');

(function renderArrayToGameBoard() {
       for (i=0;i < allBoxes.length;i++) {
       gameboardModule.gameboard[i] = document.querySelectorAll('.grid-box')[i].textContent;
    }
})()
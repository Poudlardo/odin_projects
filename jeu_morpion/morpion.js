let gameboardModule = (() => {
    let gameboard = ['','','','','','','','',''];
    return {gameboard};
})();

let displayControllerModule = (()=> {



})()

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

function addMarkToGameBoardArray() {
    let gridBoxes = document.querySelectorAll('.grid-box');
    let boxesArray = [...gridBoxes];
    boxesArray.forEach(box => {
        box.addEventListener('click', console.log('zbeub zbeub'))
    })
}


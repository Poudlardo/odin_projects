function getComputerChoice() {
    var options = ["rock", "paper", "scissors"];
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function singleRound(playerSelection, computerSelection) {
if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == 'scissors') {
        return "You Win! Rock beats scissors";
    } else {
        return "You Lose! Paper beats rock";
    }
} else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == 'rock') {
        return "You Win! Paper beats rock";
    } else {
        return "You Lose! Scissors beats paper";
    }
} else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerSelection == 'paper') {
        return "You Win! Scissors beats paper";
    } else {
        return "You Lose! Rock beats scissors";
    }
} else {
    return "I didn't get it";
}    
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors ?");
        console.log(singleRound(playerSelection, getComputerChoice()));
     }
}


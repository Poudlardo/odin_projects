function getComputerChoice() {
    var options = ["rock", "paper", "scissors"];
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

let score = 0;

function singleRound(playerSelection, computerSelection) {
if (score == 5) {
    return "congratulations! we have a winner here";
} else if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == 'scissors') {
        score += 1;
        add.innerHTML = score;
        return "You Win! Rock beats scissors";
    } else {
        return "You Lose! Paper beats rock";
    }
} else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == 'rock') {
        score += 1;
        add.innerHTML = score;
        return "You Win! Paper beats rock";
    } else {
        return "You Lose! Scissors beats paper";
    }
} else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerSelection == 'paper') {
        score += 1;
        add.innerHTML = score;
        return "You Win! Scissors beats paper";
    } else {
        return "You Lose! Rock beats scissors";
    }
} else {
    return "I didn't get it";
}    
}

let buttons = document.querySelectorAll('button');

let source = document.getElementById('results');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e)=> {
	 let playerSelection = e.target.id ;
	 source.innerHTML = "<br>" + "Results : " + singleRound(playerSelection, getComputerChoice());
    }  );
}
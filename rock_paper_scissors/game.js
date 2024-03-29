function getComputerChoice() {
    var options = ["rock", "paper", "scissors"];
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

let score = 0;

function singleRound(playerSelection, computerSelection) {
if (score == 5) {
    document.getElementById('retry').style.display = 'block';
    return "CONGRATS! We have a winner here";
} else if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == 'scissors') {
        score += 1;
        add.innerHTML = score + ' pts';
        return "You Win! Rock beats scissors";
    } else {
        return "You Lose! Paper beats rock";
    }
} else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == 'rock') {
        score += 1;
        add.innerHTML = score + ' pts';
        return "You Win! Paper beats rock";
    } else {
        return "You Lose! Scissors beats paper";
    }
} else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerSelection == 'paper') {
        score += 1;
        add.innerHTML = score + ' pts';
        return "You Win! Scissors beats paper";
    } else {
        return "You Lose! Rock beats scissors";
    }
} else {
    return "I didn't get it";
}    
}

let buttons = document.querySelectorAll('label');

let source = document.getElementById('results');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e)=> {
	 let playerSelection = e.target.id ;
      console.log(playerSelection);
	 source.innerHTML = "<br>" + "Results : " + singleRound(playerSelection, getComputerChoice());
    }  );
}

function replay() { 
let results = document.getElementById('results');
let add = document.getElementById('add');
  add.innerHTML = '0 pts';
  results.innerHTML = '';
  document.getElementById('retry').style.display = 'none';
  return score = 0;
}
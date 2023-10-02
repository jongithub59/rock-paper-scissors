// This is a rock paper scissor game against a computer
// First get the computer's selection
function getComputerChoice() { // randomly generates a numeber 1-3 and uses a switch to convert that number to either rock, paper, or scissors
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	switch(computerChoice) {
		case 1:
			computerChoice = "rock";
			break;
		case 2:
			computerChoice = "paper";
			break;
		case 3:
			computerChoice = "scissors";
			break;
	}
	return computerChoice;
	
}

// Take the player's selection and adds a point for the winner of the round
function playRound(playerChoice) {
	const computerChoice = getComputerChoice();

	if (playerChoice == computerChoice) {
		results.textContent = 'Tie!';

	} else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
		(playerChoice == 'paper' && computerChoice == 'scissors') ||
		(playerChoice == 'scissors' && computerChoice == 'rock')) {
		computerWins = computerWins + 1;
		results.textContent = 'Computer chose ' + computerChoice + 
		'! You Lose! ' + computerChoice + ' beats '+ playerChoice+ '!';
		
	} else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
		(playerChoice == 'paper' && computerChoice == 'rock') ||
		(playerChoice == 'scissors' && computerChoice == 'paper')) {
		playerWins = playerWins + 1;
		results.textContent = 'Computer chose ' + computerChoice + 
		'! You Win! ' + playerChoice + ' beats '+ computerChoice+ '!';

	} else 
	results.textContent = 'Please enter either "Rock", "Paper", or" Scissors"';
	if (playerWins == 5) {
		results.textContent = 'Congrats! You won ' + playerWins + ' to ' + computerWins;
		removeButtons();
	} else if (computerWins == 5){
		results.textContent = 'Unfortunate. You lost ' + playerWins + ' to ' + computerWins;
		removeButtons();
	}
}

function removeButtons() {
	buttons.forEach(img => {
		img.replaceWith(img.cloneNode(true));
	})
}

// main
let playerWins = 0;
let computerWins = 0;

const score = document.querySelector('#score');
const results = document.querySelector('#results');
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const buttons = document.querySelectorAll('.btn')

score.textContent = 'Current Score \nPlayer: ' + playerWins + ' Computer: ' + computerWins; 
results.textContent = 'First to 5 wins the game';


buttons.forEach(img => {
	img.addEventListener('click', function() {
		playRound(img.id);
		score.textContent = 'Current Score \nPlayer: ' + playerWins + ' Computer: ' + computerWins; 
	})
	});




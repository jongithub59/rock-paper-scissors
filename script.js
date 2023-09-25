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
		results.textContent = 'Computer chose Scissors! You Win! Rock beats Scissors!';

	} else 
	results.textContent = 'Please enter either "Rock", "Paper", or" Scissors"';
	if (playerWins == 5) {
		results.textContent = 'Congrats! You won ' + playerWins + ' to ' + computerWins;
		controller.abort();
	} else if (computerWins == 5){
		results.textContent = 'Unfortunate. You lost ' + playerWins + ' to ' + computerWins;
		controller.abort();
	}

}


// main
let playerWins = 0;
let computerWins = 0;

const btns = document.querySelectorAll('div.btn');

const score = document.querySelector('#score');

score.textContent = 'Current Score \nPlayer: ' + playerWins + ' Computer: ' + computerWins; 

const results = document.querySelector('#results');

results.textContent = 'First to 5 wins the game';

const controller = new AbortController();
const { signal } = controller;

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
	let playerChoice = 'rock';
	playRound(playerChoice);
	score.textContent = 'Current Score \nPlayer: ' + playerWins + ' Computer: ' + computerWins; 

},{ signal });

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
	let playerChoice = 'paper';
	playRound(playerChoice);
	score.textContent = 'Current Score \nPlayer: ' + playerWins + ' Computer: ' + computerWins; 

},{ signal });

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
	let playerChoice = 'scissors';
	playRound(playerChoice);
	score.textContent = 'Current Score \nPlayer: ' + playerWins + ' Computer: ' + computerWins; 


},{ signal });



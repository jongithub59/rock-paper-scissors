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
function playRound() {
	const computerChoice = getComputerChoice();
	let playerChoice = prompt('Choose rock, paper, or scissors.');
	playerChoice = playerChoice.toLowerCase();

	if (playerChoice == computerChoice) {
		return('Tie!');

	} else if(playerChoice == 'rock' && computerChoice == 'paper') {
		computerWins = computerWins + 1;
		return('Computer chose Paper! You Lose! Paper beats Rock!');
		

	} else if (playerChoice == 'rock' && computerChoice == 'scissors') {
		playerWins = playerWins + 1;
		return('Computer chose Scissors! You Win! Rock beats Scissors!');

	} else if (playerChoice == 'paper' && computerChoice == 'rock') {
		playerWins = playerWins + 1;
		return('Computer chose Rock! You Win! Paper beats Rock!');

	} else if (playerChoice == 'paper' && computerChoice == 'scissors') {
		computerWins = computerWins + 1;
		return('Computer chose Scissors! You Lose! Scissors beats Paper!');

	} else if (playerChoice == 'scissors' && computerChoice == 'rock') {
		computerWins = computerWins + 1;
		return('Computer chose Rock! You Lose! Rock beats Scissors!');

	} else if (playerChoice == 'scissors' && computerChoice == 'paper') {
		playerWins = playerWins + 1;
		return('Computer chose Paper! You Win! Scissors beats Paper!');
	} else 
		return('Please enter either "Rock", "Paper", or" Scissors"');

}
//  Plays rock paper scissors for 5 rounds and displays the winner
function game() {
	while (playerWins < 5 && computerWins < 5) {
		console.log(playRound()); 
		console.log('Rounds won: ' + playerWins + ' Computer rounds won: ' + computerWins);
	}
	if (playerWins = 5) {
		return('You won the game!')
	} else {
		return('You lost the game.')
	}
}

// main
let playerWins = 0;
let computerWins = 0;
console.log(game());


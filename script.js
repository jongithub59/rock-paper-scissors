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

function playRound(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		return('Tie!');

	} else if(playerChoice == 'rock' && computerChoice == 'paper') {
		return('Computer chose Paper! You Lose! Paper beats Rock!');

	} else if (playerChoice == 'rock' && computerChoice == 'scissors') {
		return('Computer chose Scissors! You Win! Rock beats Scissors!');

	} else if (playerChoice == 'paper' && computerChoice == 'rock') {
		return('Computer chose Rock! You Win! Paper beats Rock!');

	} else if (playerChoice == 'paper' && computerChoice == 'scissors') {
		return('Computer chose Scissors! You Lose! Scissors beats Paper!');

	} else if (playerChoice == 'scissors' && computerChoice == 'rock') {
		return('Computer chose Rock! You Lose! Rock beats Scissors!');

	} else if (playerChoice == 'scissors' && computerChoice == 'paper') {
		return('Computer chose Paper! You Win! Scissors beats Paper!');
	} else 
		return('Please enter either "Rock", "Paper", or" Scissors"');
}



// Take the player's selection and decide the winner
	let playerChoice = prompt('Choose rock, paper, or scissors.');
	playerChoice = playerChoice.toLowerCase();
	const computerChoice = getComputerChoice();
	console.log(playRound(playerChoice, computerChoice));


const rockpaperscissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const answer = rockpaperscissors[Math.floor(Math.random() * rockpaperscissors.length)];
    return answer;
}

function getHumanChoice() {
    let choice = '';
    while (choice.toLowerCase() !== 'rock' && choice.toLowerCase() !== 'paper' && choice.toLowerCase() !== 'scissors') {
        choice = prompt("please choose rock, paper, or scissors");
    }
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const score = playRound(humanSelection, computerSelection);
        if (score === 1) {
            humanScore++;
        }
        else if (score === 2) {
            computerScore++;
        }
    }
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore === computerScore) {
        console.log(`The game ends in a tie!`)
    }
    else if (humanScore > computerScore) {
        console.log(`You win the game!`);
    }
    else if (computerScore > humanScore) {
        console.log(`The computer wins the game!`);
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Both chose ${humanChoice}!  Draw!`);
        return 0;
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You lose!  Paper beats rock!`);
        return 2;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You win!  Paper beats rock!`);
        return 1;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You lose!  Scissors beats paper!`);
        return 2;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win!  Scissors beats paper!`);
        return 1;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You lose!  Rock beats scissors!`);
        return 2;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You win!  Rock beats scissors!`);
        return 1;
    }
}

playGame();
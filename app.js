let playerScore = 0;
let computerScore = 0;

const rockpaperscissors = ['rock', 'paper', 'scissors'];

const body = document.querySelector('body');
const outerDiv = document.createElement('div');
const buttonsDiv = document.createElement('div');
const labelDiv = document.createElement('div');
const commentDiv = document.createElement('div');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.style.height = '150px';
rock.style.width = '150px';
rock.style.borderRadius = '20px';
rock.textContent = 'Rock!';
rock.style.fontWeight = 'bold';
rock.style.backgroundColor = 'slateblue';
rock.style.color = 'white';
rock.style.boxShadow = '12px 12px 2px 1px rgba(128, 128, 128, .5)';
rock.style.fontFamily = `'Pixelify Sans', sans-serif`;
rock.style.fontOpticalSizing = `auto`;
rock.style.fontWeight = `normal`;
rock.style.fontStyle = `normal`;
rock.style.fontSize = `20px`;
rock.style.border = 'none';

const paper = document.createElement('button');
paper.classList.add('paper');
paper.style.height = '150px';
paper.style.width = '150px';
paper.style.borderRadius = '20px';
paper.textContent = 'Paper!';
paper.style.fontWeight = 'bold';
paper.style.backgroundColor = 'orange';
paper.style.color = 'white';
paper.style.boxShadow = '12px 12px 2px 1px rgba(128, 128, 128, .5)';
paper.style.fontFamily = `'Pixelify Sans', sans-serif`;
paper.style.fontOpticalSizing = `auto`;
paper.style.fontWeight = `normal`;
paper.style.fontStyle = `normal`;
paper.style.fontSize = `20px`;
paper.style.border = 'none';

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.style.height = '150px';
scissors.style.width = '150px';
scissors.style.borderRadius = '20px';
scissors.textContent = 'Scissors!';
scissors.style.fontWeight = 'bold';
scissors.style.backgroundColor = 'slategray';
scissors.style.color = 'white';
scissors.style.boxShadow = '12px 12px 2px 1px rgba(128, 128, 128, .5)';
scissors.style.fontFamily = `'Pixelify Sans', sans-serif`;
scissors.style.fontOpticalSizing = `auto`;
scissors.style.fontWeight = `normal`;
scissors.style.fontStyle = `normal`;
scissors.style.fontSize = `20px`;
scissors.style.border = 'none';

buttonsDiv.appendChild(rock);
buttonsDiv.appendChild(paper);
buttonsDiv.appendChild(scissors);

scissors.addEventListener('click', () => { return playRound('scissors', getComputerChoice()) });
rock.addEventListener('click', () => { return playRound('rock', getComputerChoice()) });
paper.addEventListener('click', () => { return playRound('paper', getComputerChoice()) });

const pScoresDiv = document.createElement('div');
const cScoresDiv = document.createElement('div');

pScoresDiv.style.display = 'flex';
pScoresDiv.style.alignItems = 'center';
pScoresDiv.style.justifyContent = 'center';
cScoresDiv.style.display = 'flex';
cScoresDiv.style.alignItems = 'center';
cScoresDiv.style.justifyContent = 'center';

labelDiv.appendChild(pScoresDiv);
labelDiv.appendChild(cScoresDiv);
labelDiv.appendChild(commentDiv);
outerDiv.appendChild(buttonsDiv);
outerDiv.appendChild(labelDiv);

body.appendChild(outerDiv);

outerDiv.style.display = 'flex';
outerDiv.style.flexDirection = 'column';
outerDiv.style.alignItems = 'center';
outerDiv.style.justifyContent = 'center';

const tds = document.querySelectorAll('button');
tds.forEach((td, index) => {
    td.addEventListener("mouseover", (event) => event.target.style.opacity = '0.5')
    td.addEventListener("mouseout", (event) => event.target.style.opacity = '1.0')
});

tds.forEach(td => {
    td.style.margin = '50px';
})

function getComputerChoice() {
    const answer = rockpaperscissors[Math.floor(Math.random() * rockpaperscissors.length)];
    return answer;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        commentDiv.textContent = `Both chose ${humanChoice}! Draw!`;
        return logScore(null);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        commentDiv.textContent = `You lose!  Paper beats rock!`;
        return logScore('computer');
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        commentDiv.textContent = `You win!  Paper beats rock!`;
        return logScore('player');
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        commentDiv.textContent = `You lose!  Scissors beats paper!`;
        return logScore('computer');
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        commentDiv.textContent = `You win!  Scissors beats paper!`;
        return logScore('player');
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        commentDiv.textContent = `You lose!  Rock beats scissors!`;
        return logScore('computer');
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        commentDiv.textContent = `You win!  Rock beats scissors!`;
        return logScore('player');
    }
}

function logScore(scorer) {
    if (scorer === 'player') {
        playerScore++;
        updateState();
    }
    else if (scorer === 'computer') {
        computerScore++;
        updateState();
    }
    else if (scorer === null) {
        updateState();
    }
}

function updateState() {
    pScoresDiv.textContent = `Player Score: ${playerScore}`;
    cScoresDiv.textContent = `Computer Score: ${computerScore}`;
    if (computerScore === 5) {
        commentDiv.textContent = 'The CPU won the match!'
        tds.forEach(td => td.disabled = true);
    }
    else if (playerScore === 5) {
        commentDiv.textContent = 'You won the match!'
        tds.forEach(td => td.disabled = true);
    }
}
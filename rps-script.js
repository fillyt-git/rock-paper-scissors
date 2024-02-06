
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundResult = "";
const result = document.querySelector('#result');
const scoreboard = document.querySelector('#scoreboard');

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        }; 
};

function play(playerSelection, computerSelection) {
    if (playerScore === 5) {
        roundResult = 'You won best out of 5!';
        playerScore
    } else if (computerScore === 5) {
        roundResult = 'You lost best out of 5!';
    } else {
        switch (playerSelection + computerSelection) {
            case "paperrock":
            case "rockscissors":
            case "scissorspaper":
                playerScore += 1;
                if (playerScore === 5) {
                    roundResult = 'You won best out of 5!';
                } else {
                    roundResult = (
                        `You Win! ${playerSelection.toUpperCase().charAt(0)}` + `${playerSelection.slice(1)}`+ 
                        ` beats ${computerSelection.toUpperCase().charAt(0)}` + `${computerSelection.slice(1)}!`
                    );
                };
                break;
            case "rockpaper":
            case "scissorsrock":
            case "paperscissors":
                computerScore += 1;
                if (computerScore === 5) {
                    roundResult = 'You lost best out of 5!';
                } else {
                    roundResult = (
                        `You Lose! ${computerSelection.toUpperCase().charAt(0)}` + `${computerSelection.slice(1)}` + 
                        ` beats ${playerSelection.toUpperCase().charAt(0)}` + `${playerSelection.slice(1)}!`
                    );
                };
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                roundResult = "Tie, go again!";
                break;
        };
    };
};

const gameButtons = document.querySelectorAll('#gameButtons button');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {

        playerSelection = button.id;
        computerSelection = getComputerChoice();
        play(playerSelection, computerSelection);
        result.textContent = roundResult;
        scoreboard.textContent = `Player Score: ${playerScore}
                                Computer Score: ${computerScore}`;
        if (playerScore === 5 || computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
        };
    });
});
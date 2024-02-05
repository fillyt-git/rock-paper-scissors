
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        }; 
};

let computerSelection = getComputerChoice().toLowerCase();
let playerSelection;

/* for (; (playerSelection !== ("rock" || "paper" || "scissors")); ) {
    playerSelection = prompt("Error, choose again.").toLowerCase();
}; */

function play(playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            return (
                `You Win! ${playerSelection.toUpperCase().charAt(0)}` + `${playerSelection.slice(1)}`+ 
                ` beats ${computerSelection.toUpperCase().charAt(0)}` + `${computerSelection.slice(1)}!`
            );
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            return (
                `You Lose! ${computerSelection.toUpperCase().charAt(0)}` + `${computerSelection.slice(1)}` + 
                ` beats ${playerSelection.toUpperCase().charAt(0)}` + `${playerSelection.slice(1)}!`
            );
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return "Tie, go again!";
    };
};

const gameButtons = document.querySelectorAll('#gameButtons button');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {

        playerSelection = `${button.id}`;

        console.log(playerSelection);
        console.log(computerSelection);
        console.log(play(playerSelection, computerSelection));
    });
});

/* if (play(playerSelection, computerSelection) === "tie") {
    console.log("Tie!");
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt("Choose Again").toLowerCase();
    for (; (playerSelection !== ("rock" || "paper" || "scissors")); ) {
        playerSelection = prompt("Error, choose again.").toLowerCase();
    };
    play(playerSelection, computerSelection);
} */

/* console.log(play(playerSelection, computerSelection)) */
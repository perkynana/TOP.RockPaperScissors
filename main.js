console.log("Rock-Paper-Scissors-Project");
//Creating an array of possible options for Rock Paper Scissors
const options = ["rock", "paper", "scissors"];

//Funciton that will populate a computer choice based on a random number. 
//Using .length across the options allows us to determine length based on number of possible choices
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Creating a funtion to verify who the winner is. Comparing user input to computer input. 
// "If else" statement to verify winner
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

// Creating a function that will play a single round of RPS based on a user's input and a random generated selection for the computer
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Draw") {
        return "No one wins, play again"
    } else if (result === "Player") {
        return `Player wins! ${playerSelection} beats ${computerSelection}`
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`
    }
}


function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower
        }
    }
}

// Creating a loop until either the user or the computer reaches 5 wins
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer) {
        console.log("Player was the winner");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer was the winner");
    }
    else {
        console.log("It is a tie");
    }
}
game()
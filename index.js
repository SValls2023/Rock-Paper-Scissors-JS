
function game() {
    console.log("Weclome to Rock Paper Scissors!");
    let rounds = 1;
    let playerPoints = 0;
    let cpuPoints = 0;
    while (rounds < 6 && (playerPoints < 3 && cpuPoints < 3)) {
        playerChoice = prompt("ROUND " + (rounds) + "! Rock, paper, or scissors?");
        if (playerChoice === null) continue;
        else { 
            playerChoice = playerChoice.toLowerCase();
            if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
                let computerChoice = getComputerChoice();
                let roundWinner = playRound(playerChoice, computerChoice);
                if (roundWinner == 1) {
                    alert("You lost, " + playerChoice + " loses against " + computerChoice + "!\n"
                            + "Player: " + playerPoints + " CPU: " + (cpuPoints + 1));
                    cpuPoints++;
                    rounds++;
                }
                else if (roundWinner == 2) {
                    alert("You win, " + playerChoice + " beats " + computerChoice + "!\n"
                            + "Player: " + (playerPoints + 1) + " CPU: " + cpuPoints);
                    playerPoints++;
                    rounds++;
                }
                else {
                    alert("It's a tie! This round will not count! Please select your weapon again.\n"
                            + "Player: " + playerPoints + " CPU: " + cpuPoints);
                }

            } else {
                alert("Could not understand option, please select your weapon again.");
            }
        }
    }

    if (playerPoints > cpuPoints) {
        alert("You win the competition! Player: " + playerPoints + " CPU: " + cpuPoints);
    }
    else {
        alert("The CPU won the competition! Player: " + playerPoints + " CPU: " + cpuPoints);
    }
}

// Decides if the player wins, loses, or ties with the computer for the round!
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper")  {
            return 1;
        }
        else if (computerSelection === "scissors") {
            return 2;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") { 
            return 1;
        }
        else if (computerSelection === "rock") {
            return 2;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return 1;
        }
        else if (computerSelection === "paper") {
            return 2;
        }
    }

    return 0;
}

// Computer makes choice between 1-3 representing rock, papaer, scissors:
// 1: Rock, 2: Paper, 3: Scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) return "rock";
    else if (choice === 2) return "paper";
    return "scissors";
}

game();

// const playerChoice = "rOcK";
// const compChoice = getComputerChoice();
// const gameDecider = playRound(playerChoice, compChoice);
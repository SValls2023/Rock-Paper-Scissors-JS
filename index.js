
function game() {
    console.log("Weclome to Rock Paper Scissors!")
    let rounds = 1;
    let playerPoints = 0;
    let cpuPoints = 0;
    while (rounds < 6) {
        playerChoice = prompt("ROUND " + (rounds) + "! Rock, paper, or scissors?")
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            let roundWinner = playRound(playerChoice, getComputerChoice());
            if (roundWinner == 1) {
                cpuPoints += 1;
                rounds++;
            }
            else if (roundWinner == 2) {
                playerPoints += 1;
                rounds++;
            }
            else {
                console.log("This round will not count! Please select your weapon again.")
            }

        } else {
            console.log("Could not understand option, please select your weapon again.")
        }
    }

    if (playerPoints > cpuPoints) {
        console.log("You win the competition! Player: " + playerPoints + " CPU: " + cpuPoints);
    }
    else {
        console.log("The CPU won the competition! Player: " + playerPoints + " CPU: " + cpuPoints);
    }
}

// Decides if the player wins, loses, or ties with the computer for the round!
function playRound(playerSelection, computerSelection) {
    const player = playerSelection
    const computer = computerSelection
    const win = "You win, " + player + " beats " +
                computer + "!";
    const lose = "You lost, " + player + " loses against " +
                computer + "!";
    const tie = "It's a tie!"

    
    if (player === "rock") {
        if (computer === "paper")  {
            console.log(lose);
            return 1;
        }
        else if (computer === "scissors") {
            console.log(win);
            return 2;
        }
    }

    if (player === "paper") {
        if (computer === "scissors") { 
            console.log(lose);
            return 1;
        }
        else if (computer === "rock") {
            console.log(win);
            return 2;
        }
    }

    if (player === "scissors") {
        if (computer === "rock") {
            console.log(lose);
            return 1;
        }
        else if (computer === "paper") {
            console.log(win);
            return 2;
        }
    }

    console.log(tie);
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
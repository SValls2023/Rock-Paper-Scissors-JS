// Main function where Rock Paper Scissors game takes place
function game() {
    // Deletion: console.log("Weclome to Rock Paper Scissors!");
    const rps_buttons = document.querySelectorAll('.choice');
    const status = document.querySelector('#status');
    const battle = document.querySelector('#battle')
    const playerScore = document.querySelector('#playerScore');
    const cpuScore = document.querySelector('#cpuScore');
    let rounds = 1;
    let playerPoints = 0;
    let cpuPoints = 0;

    for(let i = 0; i < rps_buttons.length; i++) {
        rps_buttons[i].addEventListener('click', () => {
            const playerChoice = rps_buttons[i].value;
            const computerChoice = getComputerChoice();
            const roundWinner = playRound(playerChoice, computerChoice);
            if (roundWinner === 1) {
                status.textContent = "You lost!";
                battle.textContent = `${playerChoice} loses against ${computerChoice}!`
                cpuPoints++;
                cpuScore.textContent = `CPU: ${cpuPoints}`;
                rounds++;
            }
            else if (roundWinner === 2) {
                status.textContent = "You won!";
                battle.textContent = `${playerChoice} wins against ${computerChoice}!`
                playerPoints++;
                playerScore.textContent = `Player: ${playerPoints}`;
                rounds++;
            }
            else {
                status.textContent = "It's a tie!";
                battle.textContent = "Please select your weapon again!";
            }
        });
    }

    // if (playerPoints === 5) {
    //     alert("You win the competition! Player: " + playerPoints + " CPU: " + cpuPoints);
    // }
    // else {
    //     alert("The CPU won the competition! Player: " + playerPoints + " CPU: " + cpuPoints);
    // }
}

// Decides if the player wins, loses, or ties with the computer for the round!
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "paper")  {
            return 1;
        }
        else if (computerSelection === "scissors") {
            return 2;
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "scissors") { 
            return 1;
        }
        else if (computerSelection === "rock") {
            return 2;
        }
    }

    if (playerSelection === "Scissors") {
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
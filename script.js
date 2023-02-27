function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const random =  options[Math.floor(Math.random() * options.length)]
    return random
}

let score = 0

function game() {
    for (let turnNumber = 0; turnNumber < 5; turnNumber++) {
        playerSelect = prompt("Rock, Paper or Scissors?").toLowerCase();
        computerSelect = getComputerChoice().toLowerCase();
        roundName = "Round " + (turnNumber + 1);
        console.log(roundName);
        console.log(playRound(playerSelect,computerSelect));
    }
    if (score > 2) {
            console.log("You won against the computer! Your final score is " + score)
        }
    else if (score < 2) {
            console.log("You lost. Your score is " + score)
        }
    
    function playRound(playerSelection, computerSelection) {
        console.log(playerSelection)
        console.log(computerSelection)
        if (playerSelection === computerSelection) {
            return "Draw"
        }
        else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return "You lose"
            }
            else {
                score ++
                return "You win"
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return "You lose"
            }
            else {
                score ++
                return "You win"
            }
        }
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                return  "You lose"
            }
            else {
                score ++
                return "You win"
            }
        }

    }
}

game()
console.log()
choices = ["rock", "paper", "scissors"]
playerScore = 0
computerScore = 0

function getComputerChoice(){
    return choices[(Math.floor(Math.random() * choices.length))]
}

computerInput = getComputerChoice().toUpperCase()

function playRound(computerChoice, playerChoice) {
    console.log("Computer's choice: ",computerChoice)
    console.log("Player's choice: ",playerChoice)
    if (playerChoice == computerChoice) {
        return console.log("Draw!")
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        playerScore += 1
        return console.log("Rock beats scissors! Win!")
    } 
    else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        playerScore += 1
        return console.log("Paper beats rock! Win!")
    } 
    else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        playerScore += 1
        return console.log("Scissors beats paper! Win!")
    } 
    else if (playerChoice != "ROCK" && playerChoice != "SCISSORS" && playerChoice != "PAPER"){
        return console.log("invalid input!")
    }
    else {
        computerScore += 1
        return console.log("Loss!")
    }

}

for(i=0;i<3;i++){
    playerInput = prompt("enter your choice, e.g 'rock', 'paper', 'scissors'").toUpperCase()
    computerInput = getComputerChoice()
    playRound(computerInput, playerInput)
}

console.log("Player score: ", playerScore, " Computer score: ", computerScore)

if (playerScore>computerScore) {
    console.log("You win the game!")
}
else if (computerScore > playerScore) {
    console.log("You lose the game! Try again!")
}
else {
    console.log("The game is a draw!")
}

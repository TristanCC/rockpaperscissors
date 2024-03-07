choices = ["rock", "paper", "scissors"]
playerScore = 0
computerScore = 0

function getComputerChoice(){
    return choices[(Math.floor(Math.random() * choices.length))]
}

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

/*for(i=0;i<3;i++){
    playerInput = prompt("enter your choice, e.g 'rock', 'paper', 'scissors'").toUpperCase()
    playRound(computerInput, playerInput)
}*/

const body = document.querySelector('body')
body.style.cssText = "height:100vh; align-content:center; display:flex;"
const maindiv = document.querySelector('.main')
maindiv.style.cssText = "margin-top:auto; margin-bottom:auto; padding:50px; background-color:blue; display:flex; flex:1; justify-content:space-around"

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.style.cssText = "width:30%; height:75px"
    button.addEventListener('click', (e) => {

        choice = e.target.id.toUpperCase()
        computerInput = getComputerChoice().toUpperCase()
        playRound(computerInput,choice)
    })
})

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

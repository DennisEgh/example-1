



const computerSelection = computerPlay();

let computerScore = 0
let playerScore = 0




function computerPlay(){
    const myArr = ["rock", "paper","scissors"];
    return myArr[~~(Math.random() * myArr.length)];
}


function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

if (computerSelection == playerSelection){
console.log(` TIED. `)

} else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
)  {(computerScore = ++computerScore), playerScore < computerScore ? 
    console.log(` ${computerScore} - ${playerScore} To Them. ${computerSelection} beats ${playerSelection}.`) :
     (playerScore == computerScore ? 
     console.log(` ${computerScore} - ${playerScore} To Them. ${computerSelection} beats ${playerSelection}. It's a TIE. `) :
     console.log(` ${computerScore} - ${playerScore} To Them. ${computerSelection} Beats ${playerSelection}. `));


} else if (
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper")
)  {(playerScore = ++playerScore), playerScore > computerScore ?
     console.log(` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}`) :
    (playerScore == computerScore ? 
    console.log(` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}. It's a TIE. `) :
    console.log(` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}. `))
}; 
};


function declareWinner(){
    if (i = 5 && computerScore == playerScore){
        console.log("It's a draw. Both Live To Fight Another Day.")
        } else if ( i = 5 && computerScore > playerScore){
            console.log("The Machines Win... This Time.")
        } else if (i = 5 && playerScore > computerScore){
            console.log("You win!... This Time.")
        };
};

function playGame(){
    for (i = 0; i < 5; i++){
    const playerSelection = prompt("Please Choose Rock, Paper Or Scissors!");
    playRound(computerSelection, playerSelection)}; 
    
     declareWinner();
    };

playGame();
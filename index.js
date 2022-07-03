

const playerSelection = "RoCk";

const computerSelection = computerPlay();


function computerPlay(){
    const myArr = ["Rock", "Paper","Scissors"];
    return myArr[~~(Math.random() * myArr.length)];
}


function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

if (computerSelection == playerSelection){
    console.log("TIE GAME.")
} else if (
(computerSelection == "rock" && playerSelection == "scissors") ||
(computerSelection == "scissors" && playerSelection == "paper") ||
(computerSelection == "paper" && playerSelection == "rock")
){console.log("You Lose.")
} else if (
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper")
){console.log("You Win.")};
   

};


function playGame(){
    playRound(computerSelection, playerSelection);
};
console.log(playGame());
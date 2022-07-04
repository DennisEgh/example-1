



const computerSelection = computerPlay();

let computerScore = 0
let playerScore = 0

/* Computer Selection */
let isComputerSelectionRock = computerSelection == "rock";
let isComputerSelectionPaper = computerSelection == "paper";
let isComputerSelectionScissors = computerSelection == "scissors";
/* Player Selection */
let isPlayerSelectionRock = playerSelection == "rock";
let isPlayerSelectionPaper = playerSelection == "paper";
let isPlayerSelectionScissors = playerSelection == "scissors";

/* TERNARY OPERATOR TRANSLATION */
playerScoreLess = (playerScore < computerScore);
playerScoreMore = (PlayerScoreLess > computerScore);

computerWinsRound = (` ${computerScore} - ${playerScore} To Them. ${computerSelection} beats ${playerSelection}.`);
computerWinsRoundTie = (` ${computerScore} - ${playerScore} To Them. ${computerSelection} beats ${playerSelection}. It's a TIE.`);

EqualSelection = (computerSelection == playerSelection);
EqualScore = (playerScore == computerScore);

playerWinsRound = (` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}`);
playerWinsRoundTie = (` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}. It's a TIE.`)




function computerPlay(){
    const myArr = ["Rock", "Paper","Scissors"];
    return myArr[~~(Math.random() * myArr.length)];
}


function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

if (EqualScore){
console.log(` TIED. `)

} else if (
    (isComputerSelectionRock && isPlayerSelectionScissors) ||
    (isComputerSelectionRock && isPlayerSelectionPaper) ||
    (isComputerSelectionPaper && isPlayerSelectionRock)
)  {(computerScore = ++computerScore), playerScoreLess ? 
    console.log(computerWinsRound) : 
    (EqualScore ? 
    console.log(computerWinsRoundTie) :
    console.log(computerWinsRound));


} else if (
    (isComputerSelectionScissors && isPlayerSelectionRock) ||
    (isComputerSelectionPaper && isPlayerSelectionScissors) ||
    (isComputerSelectionRock && isPlayerSelectionPaper)
)  {(playerScore = ++playerScore), playerScoreMore ? 
    console.log(playerWinsRound) :
    (EqualScore ? 
    console.log(playerWinsRoundTie) :
    console.log(playerWinsRound))
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
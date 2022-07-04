



const computerSelection = computerPlay();


let computerScore = 0
let playerScore = 0

/* Computer Selection */
const isComputerSelectionRock = computerSelection == "rock";
const isComputerSelectionPaper = computerSelection == "paper";
const isComputerSelectionScissors = computerSelection == "scissors";
/* Player Selection */
const isPlayerSelectionRock = playerSelection == "rock";
const isPlayerSelectionPaper = playerSelection == "paper";
const isPlayerSelectionScissors = playerSelection == "scissors";

/* TERNARY OPERATOR TRANSLATION */
const playerScoreLess = playerScore < computerScore;
const playerScoreMore = playerScore > computerScore;

const computerWinsRound = ` ${computerScore} - ${playerScore} To Them. ${computerSelection} beats ${playerSelection}.`;
const computerWinsRoundTie = ` ${computerScore} - ${playerScore} To Them. ${computerSelection} beats ${playerSelection}. It's a TIE.`;

const EqualSelection = computerSelection == playerSelection;
const EqualScore = playerScore == computerScore;

const playerWinsRound = ` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}`;
const playerWinsRoundTie = ` ${playerScore} - ${computerScore} To You. ${playerSelection} beats ${computerSelection}. It's a TIE.`;





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
    console.log('computerWinsRound') : 
    (EqualScore ? 
    console.log('computerWinsRoundTie') :
    console.log('computerWinsRound'));


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
    if (i = 5 && EqualScore){
        console.log("It's a draw. Both Live To Fight Another Day.")
        } else if ( i = 5 && playerScoreLess){
            console.log("The Machines Win... This Time.")
        } else if (i = 5 && playerScoreMore){
            console.log("You win!... This Time.")
        };
};

function playGame(){
    for (i = 0; i < 5; i++){
        prompt("Please Choose Rock, Paper Or Scissors!");
    playRound(computerSelection, playerSelection)}; 
    
     declareWinner();
    };

playGame();



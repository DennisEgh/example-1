





/* function computerPlay(){
 const numberGen = () =>{
        return Math.floor(Math.random() * 3) + 1
 };

return numberGen() === 1 ? "Rock" : (numberGen() === 2 ? "Paper" : "Scissor");

};


console.log(computerPlay());

*/

const playerSelection = "Rock";

const computerSelection = computerPlay();


function computerPlay(){
    const myArr = ["Rock", "Paper","Scissors"];
    return myArr[~~(Math.random() * myArr.length)];
}


function playRound(computerSelection, playerSelection){
    
if( computerSelection == playerSelection){
    console.log("TIE GAME");
} else if ( 

(computerSelection == "Rock" && playerSelection == "Scissors") ||
(computerSelection == "Scissors" && playerSelection == "Paper") ||
(computerSelection == "Paper" && playerSelection == "Rock")
){console.log("You Lose.");
};

};




console.log(playRound(computerSelection, playerSelection));

/*    if(computerSelection == playerSelection){
        console.log("TIE GAME")
    }else(
        
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock")


        
        
        ){
            console.log("You Lose.");
        }
}

console.log(playRound(computerSelection, playerSelection));

*/ 
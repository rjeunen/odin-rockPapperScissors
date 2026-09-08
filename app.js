//Elements
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scoreboard = document.querySelector("#score");

function getComputerChoice(){
    //Generate a random number from 1 - 3
    let randomNumber = Math.floor(Math.random() *3) + 1;
    //return the choice of computer in a string depending on the random number
    if(randomNumber === 1){
        return "rock";
    }
    else if(randomNumber === 2){
        return "paper";
    }
    else if(randomNumber === 3){
        return "scissors";
    }
    else {
        return "Something went wrong";
    }
}

function getHumanChoice(){
    //Ask the user for an input - reform to all lowercase
    let humanChoice = prompt("Enter your choice: rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        const result = document.createElement("p");
        result.textContent = `It's a draw, you both picked ${humanChoice}`;
        scoreboard.appendChild(result);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ){
        const result = document.createElement("p");
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        scoreboard.appendChild(result);

        humanScore++;
    }
    else{
        const result = document.createElement("p");
        result.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
        scoreboard.appendChild(result);

        computerScore++;
    }
}

//For part 2 of the excercise we had to delete the part of the code that plays exactly 5 times. Commenting this piece of the code out.

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;

//     //play a single round
//     //Check the inputs - who wins - log and increment score
//     function playRound(humanChoice, computerChoice){
//         if(humanChoice === computerChoice){
//             console.log(`It's a draw, you both picked ${humanChoice}`);
//         }
//         else if(humanChoice === "rock" && computerChoice === "scissors" ||
//             humanChoice === "paper" && computerChoice === "rock" ||
//             humanChoice === "scissors" && computerChoice === "rock"
//         ){
//             console.log(`You win, ${humanChoice} beats ${computerChoice}`);
//             humanScore++;
//         }
//         else{
//             console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
//             computerScore++;
//         }
//     }

//     //Play the game using a loop (5 rounds) so that we dont repeat ourselfs
//     for(let i = 0; i < 5; i++){
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//         console.log(`Score: Human: ${humanScore} VS Computer: ${computerScore}`);
//     }
// }

//playGame();

//event listeners
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
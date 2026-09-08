//Elements
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const scoreboard = document.querySelector("#scoreboard");
const runningscore = document.querySelector("#runningScore");
const endgameResult = document.querySelector("#endgameResult");

//Initialising Scoreboard
const result = document.createElement("p");
result.textContent = `Score messages will be displayed here ...`;
scoreboard.appendChild(result);

//Inialising running score
let humanScore = 0;
let computerScore = 0;
const score = document.createElement("p");
score.textContent = `Human: ${humanScore} VS Computer: ${computerScore}`;
runningscore.appendChild(score);

//function to check the running score
function checkScore(){
    if(humanScore === 5){
        const winnerMessage = document.createElement("p");
        winnerMessage.textContent = `You WON, You beat the computer ${humanScore} to ${computerScore}!`;
        endgameResult.appendChild(winnerMessage);
    }

        if(computerScore === 5){
        const winnerMessage = document.createElement("p");
        winnerMessage.textContent = `You LOST, You lost to the computer ${computerScore} to ${humanScore}!`;
        endgameResult.appendChild(winnerMessage);
    }
}


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

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        const result = document.createElement("p");
        result.textContent = `It's a draw, you both picked ${humanChoice}`;

        //remove last line in score board
        scoreboard.removeChild(scoreboard.lastChild);

        //add new line in scoreboard
        scoreboard.appendChild(result);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ){
        //remove last line in score board
        scoreboard.removeChild(scoreboard.lastChild);

        //add new line in scoreboard
        const result = document.createElement("p");
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        scoreboard.appendChild(result);

        humanScore++;
        //remove last score
        runningscore.removeChild(runningscore.lastChild);

        //add new score
        const score = document.createElement("p");
        score.textContent = `Human: ${humanScore} VS Computer: ${computerScore}`;
        runningscore.appendChild(score);

        checkScore();
    }
    else{
        const result = document.createElement("p");
        result.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;

        //remove last line in score board
        scoreboard.removeChild(scoreboard.lastChild);

        //add new line in scoreboard
        scoreboard.appendChild(result);

        computerScore++;
        //remove last score
        runningscore.removeChild(runningscore.lastChild);

        //add new score
        const score = document.createElement("p");
        score.textContent = `Human: ${humanScore} VS Computer: ${computerScore}`;
        runningscore.appendChild(score);

        checkScore();
    }
}

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
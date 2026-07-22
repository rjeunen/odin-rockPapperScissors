//Get the computer choice - random choice
function getComputerChoice(){
    //Generate a random number from 1 - 3
    let randomNumber = Math.floor(Math.random() *3) + 1;
    //return the chice of computer in a string depending on the random number
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

//Get Human choice
function getHumanChoice(){
    //Ask the user for an input
    let humanChoice = prompt("Enter your choice: rock, paper or scissors");
    return humanChoice;
}

//Testing
//console.log("Human choice: " + getHumanChoice());
console.log("Computer choice: " + getComputerChoice());
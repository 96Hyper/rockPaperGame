let myScore = document.querySelector("#score");
let computerScore = document.querySelector("#cscore");

let rock = document.querySelector("#Rock");
let paper = document.querySelector("#Paper");
let scissor = document.querySelector("#Scissor");

const resultElm = document.querySelector("#result");
const btnElm = document.querySelectorAll("button");


let userScore = 0;
let cScore = 0;

btnElm.forEach((btn) => {
    btn.addEventListener("click" , ()=>{
        // console.log("hey u click on "  + btn.id);
        // console.log("computer choose " +  computer());
       const result =  playRound(btn.id, computer());
       resultElm.textContent = result;
    })
})


function computer(){
    const choices = ["Rock" , "Paper" , "Scissor"];

    const random = Math.floor(Math.random()*choices.length)
    return choices[random];
}



function playRound(userSelection, compSelection) {
    if (userSelection === compSelection) {
        return "Draw";
    } else if (
        (userSelection === "Rock" && compSelection === "Scissor") ||
        (userSelection === "Paper" && compSelection === "Rock") ||
        (userSelection === "Scissor" && compSelection === "Paper")
    ) {userScore++
        myScore.textContent = `Your Score : ${userScore}`
        return `You Won! ${userSelection} beats ${compSelection}.`;
    } else {
        cScore++
        computerScore.textContent = `Computer Score : ${cScore}`
        return `You Lose! ${compSelection} beats ${userSelection}.`;
    }
}

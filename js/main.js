const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");

const result_user = document.querySelector("#result-user-stat");
const result_comp = document.querySelector("#result-comp-stat");
const result_final = document.querySelector("#result-final-stat");

const user_rock = document.querySelector("#r");
const user_paper = document.querySelector("#p");
const user_scissor = document.querySelector("#s");

let user = "";
let comp = "";
let userScore = 0;
let compScore = 0;

function runGame(u){
    user = u;
    comp = randomComp();
    result_user.innerText = "User: " + capitalizeFirstLetter(user);
    result_comp.innerText = "Computer: " + capitalizeFirstLetter(comp);
    if (user === comp){
        result_final.innerText = "Winner: " + "Match draw";
    } else{
        if(user === "rock" && comp === "paper"){
            compWon();
        }
        else if(user === "rock" && comp === "scissor"){
            userWon();
        }
        else if(user === "paper" && comp === "rock"){
            userWon();
        }
        else if(user === "paper" && comp === "scissor"){
            compWon();
        }
        else if(user === "scissor" && comp === "rock"){
            compWon();
        }
        else if(user === "scissor" && comp === "paper"){
            userWon();
        }
    }
}
function userWon(){
    result_final.innerText = "Winner: " + "User";
    userScore += 1;
    userScoreVal.innerText = userScore;
}
function compWon(){
    result_final.innerText = "Winner: " + "Computer";
    compScore += 1;
    compScoreVal.innerText = compScore;
}

function randomComp(){
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random()*3)];
}

user_rock.addEventListener("click", () => runGame("rock"));
user_paper.addEventListener("click", () => runGame("paper"));
user_scissor.addEventListener("click", () => runGame("scissor"));

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
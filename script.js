let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function win(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    const borderDiv = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;   
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beates ${convertToWord(computerChoice)}${smallcomp}. You Win!🔥`;
    borderDiv.classList.add('green-glow');
    setTimeout(()=>borderDiv.classList.remove('green-glow'),2000)
}

function lose(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    const borderDiv = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;   
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to ${convertToWord(computerChoice)}${smallcomp}. You Lose!😞`;
    borderDiv.classList.add('red-glow');
    setTimeout(()=>borderDiv.classList.remove('red-glow'),2000)
}


function draw(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    const borderDiv = document.getElementById(userChoice);
    userScore++;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} equals to ${convertToWord(computerChoice)}${smallcomp}. It's a draw!😆`;
    borderDiv.classList.add('grey-glow');
    setTimeout(()=>borderDiv.classList.remove('grey-glow'),2000)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }

}

function main(){
    rock_div.addEventListener('click', ()=> game("r"))
    paper_div.addEventListener('click', ()=> game("p"))
    scissors_div.addEventListener('click', ()=> game("s"))
}

main()
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];  //Math.floor se sari decimal number hatt jati hai.. (agr index 9 tk hai to usse ek jada number likhenge ki 0 se 9 tk aa jaye to issme 10 hoga, agr idex 50 tk hai to 51 likhenge...)(hum index isliye use kar rahe kyuki comp string ko random select nai kr skte isliye hum index use kr rahe)
    const randInd = Math.floor(Math.random() * 3); //Math.random ek js ki hi function hai isse koi bhi random number  generate hoga..  (randomnum * 3):- agr koi number jo 1 se chota hai agr 3 se * ho jata hai to wo 0 se 2 ke range m aata hai (aur hame 0 se 2 tk hi chahiye kyuki hamara index 0 se 2 tk hi hai)
    return options[randInd];
}
const drawGame = () =>{
    //console.log("game was draw.");
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice -> these type of programming known as "modular way of programming" :- means ek kaam ke liye ek hi function banao ye reuseable hote hai .. in future hame comp choice chahiye to hum isse hi direct call kr skte hai dusra function bannane ki jarur nai.. hogi
    const  compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);


    if(userChoice === compChoice){
      drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
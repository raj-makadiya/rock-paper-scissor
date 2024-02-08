let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

 const drawGame= () =>{
     console.log("Game was Draw");
     msg.innerText="Game was Draw.Play Again";
     msg.style.backgroundColor="#081b31";
     
     
     
 }

const showWinner= (userWin,userChoice,computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore++;
        // console.log("You win!!");
        msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green"

    
    
    }
    else{
        // console.log("You Lose");
         computerScore++;
        computerScorePara.innerText=computerScore++;
        msg.innerText=`You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}



const genrateComputerchoice= () =>{
    const option=["rock","paper","scissors"];
   const randomIndex= Math.floor(Math.random()*3);
   return option[randomIndex];
}


const playgame=(userChoice) =>{
    console.log("userchoice=",userChoice);
    //genrate computer choice
    const computerChoice= genrateComputerchoice();
    console.log("compchoice=",computerChoice);
    
    let userWin="true"
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper,scissor
            userWin= computerChoice=== "paper"? false:true;
        }
        else if(userChoice==="paper"){
            // rock,scissor
            userWin= computerChoice=== "scissors"? false:true;

        }
        else{
            userWin= computerChoice=== "rock"? false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
    
    

};




choices.forEach((choice) =>{
    const userChoice =choice.getAttribute("id");
    choice.addEventListener("click", () => {
        // console.log("choice was clicked",userChoice);
        playgame(userChoice);

    })



})






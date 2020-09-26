const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    
//start the game 
 const startGame = () => {
 const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector("match");

  playBtn.addEventListener("click", () =>{
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });
};
//play match
const playMatch = () => {
 const options = document.querySelectorAll('.option button');
const playerHand = document.querySelector('player-hand');
const computerHand = document.querySelector('computer-hand');
//Computer Options
const computerOptions = ['rock','paper','scissors'];

options.forEach(option => {
  option.addEventListener('click',function(){
    //Computer Choice
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    //Here is where we call compare hands

compareHands(this.textContent.computerHands);
    //update images
    playerHand.src = './assets/${this.textContent}.png';
  computerHand src = './assets/${computerChoice}.png';
  });
});

};
const compareHands = (playerChoice, computerChoice) =>{
//update text
const winner = document.querySelector('winner');
//Checking for a tie
  if(playerChoice === computerChoice){
    winner.textContent = 'It is a tie';
    return;

}
//check for rock
if(playerChoice === 'rock'){
  if(computerChoice === 'scissors'){
    winner.textContent = 'Player Wins'
    return;
  }else{
    winner.textContent = 'Computer wins';
    return;
  }

}
//Check for paper
if(playerChoice === 'paper'){
  if(computerChoice === 'paper'){
    winner.textContent = 'computer Wins'
    return;
  }else{
    winner.textContent = 'player wins';
    return;
  }

}
//Check for scissors
if(playerChoice === 'scissors'){
  if(computerChoice === 'rock'){
    winner.textContent = 'Computer Wins'
    return;
  }else{
    winner.textContent = 'Player wins';
    return;
  }

}
}

//It's call all the inner function
startGame();
playMatch.log();
};

//start the game function
game();
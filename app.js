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
}
//It's call all the inner function
startGame();

};

//start the game function
game();
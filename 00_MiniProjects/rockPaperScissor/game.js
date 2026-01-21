let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */

  // document.querySelector('.js-rock-button').addEventListener('click' ,()=>{
  //   playGame('rock')
  // } ) // here we can't only call the function playgame('rock')  // because the playgame return a undefined value then we are giving undefined to the eventlistener so wont work 
  // document.querySelector('.js-paper-button').addEventListener('click' ,()=>{
  //   playGame('paper')
  // } ) 
  // document.querySelector('.js-scissor-button').addEventListener('click' ,()=>{
  //   playGame('scissors')
  // } ) 


  //NOW MAKING OUT THIS PROJECT TO LISTEN THE COMMAND OF KEYWORD

  document.body.addEventListener('keydown' , (event)=>{ // here we give a parameter to this
    if(event.key === 'r'){
      playGame('rock');
    }else if(event.key ==='p'){
      playGame('paper');
    }else if(event.key ==='s'){
      playGame('scissors');
    }
  })


  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You 
    <img src="${playerMove}-emoji.png" alt="rock"class="move-icon">
    <img src="${computerMove}-emoji.png" alt="Scissor"class="move-icon">
    Computer`;
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
}

let isAutoPlaying = false;
let  intervalId ;
// function autoPlay(){
//   if(!isAutoplay){
//     intervalId = setTimeout(function(){
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     },1000);
//     isAutoplay =true;
//   }
//   else {
//     clearInterval(intervalId);
//     isAutoplay=false;
//   }






function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

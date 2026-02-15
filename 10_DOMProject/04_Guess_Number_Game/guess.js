let randomNumber = Math.floor(Math.random()*100+1);
// const randomNumber = parseInt(Math.random()*100+1); // same as above 


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  // check valid value are given or not value is not character only number greater than 0 (negative not allowed )
  if(isNaN(guess)){
    alert('Please enter a valid number.')
  } else if(guess<1){
    alert("Please enter a  number  more than 1.");
  }else if (guess > 100){
    alert('Please enter a number  less than 100.');
  }else{
    prevGuess.push(guess);
    if(numGuess > 10){
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess){
  // given value is correct or not and low or high or equal

  if(guess === randomNumber){
    displayMessage(`You guessed it right.`);
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Number is too low.`);
  }else if(guess > randomNumber){
    displayMessage(`Number is too High.`);
  }
}

function displayGuess(guess){
  // what is chosen by the user 
  userInput.value = ''
  guessSlot.innerHTML +=`${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
  
}

function displayMessage(message){
  // interact with dom part and display the message 
  lowOrHi.innerHTML =`<h2>${message}</h2>`
  
}

function endGame(){
 userInput.value = '' 
 userInput.setAttribute('disabled', '')
 p.classList.add('button')
 p.innerHTML = `<button id="newGame">Start new Game</button>`
 startOver.appendChild(p)
 
 
 document.querySelector('#newGame')
    .addEventListener('click', function(){

      randomNumber = Math.floor(Math.random()*100)+1;
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = '10';
      lowOrHi.innerHTML = '';
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
}



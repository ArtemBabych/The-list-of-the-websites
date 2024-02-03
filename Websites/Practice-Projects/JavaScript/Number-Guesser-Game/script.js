let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random ()*10);
}

const getAbsoluteDistance= (currentHumanGuess,computerGuess,target) =>{
  if(currentHumanGuess < 0 || currentHumanGuess > 9) {
    alert('Your number is out of range! Please choose a number between 0 and 9. Good luck! )))');
  } else {
    const userResult=Math.abs(target-currentHumanGuess);
    const computerResult=Math.abs(target-computerGuess);
    const distance=computerResult-userResult;
    return distance;
  }
    }

const compareGuesses= (currentHumanGuess,computerGuess,target) => {
  const distance=getAbsoluteDistance(currentHumanGuess,computerGuess,target);
   return distance >=0;
}

compareGuesses(getAbsoluteDistance);
const updateScore= winner => {
return winner==='human'
?humanScore++
:computerScore++;
}

const advanceRound= () => {
  if(currentRoundNumber >=0 && currentRoundNumber <= 4) {
    currentRoundNumber++;
  } else if(currentRoundNumber >= 5) {
    gameOver();
  }
}

const gameOver = () => {
  const loseMessage=document.getElementById('lose');
  const winMessage=document.getElementById('win');
  const finalScoreW=document.getElementById('final-score-w');
  const finalScoreL=document.getElementById('final-score-l');
  if(humanScore>=3) {
    winMessage.style.display = 'block';
    finalScoreW.textContent= `Congratulations! Your score is ${humanScore}. The computer's score is ${computerScore}. If you want to restart the game, just reload the page.`;
  } else {
    loseMessage.style.display = 'block';
    finalScoreL.textContent= `The computer's score is ${computerScore}. Your score is ${humanScore}. If you want to restart the game, just reload the page.`;
  }
}
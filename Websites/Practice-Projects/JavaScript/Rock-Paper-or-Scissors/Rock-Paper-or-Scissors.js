console.log('Hey!');
console.log('Let\'s play rock, paper, or scissors game. It\'s so funny!');
console.log('\n');
console.log(`Here's how it works:

rock crushes scissors: If you choose rock and your opponent chooses scissors, you win!

scissors cuts paper: If you choose scissors and your opponent chooses paper, you win!

paper covers rock: If you choose paper and your opponent chooses rock, you win!

To play, simply type your choice - rock, paper, or scissors. After that, computer will reveal his choice, and we'll see who comes out victorious.

Ready? What's your move?`);
console.log('\n');
console.log('\n');

/* For practice, let's create a short version. 

const computerTurn= function() {
  let randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0) {
    return 'rock';
  } else if(randomNumber===1) {
    return 'paper';
  } else if(randomNumber===2){
    return 'scissors';
  } else {
    return 'Error';
  }
}

const computerChoice=computerTurn();

const result=function(myChoice) {
  if(myChoice===computerChoice) {
    return 'Draw. =|';
  } else if(myChoice==='rock' && computerChoice==='scissors' || myChoice==='paper' && computerChoice==='rock' || myChoice==='scissors' && computerChoice==='paper') {
    return 'You win! ^_^';
  }
  else {
    return 'You lose. =('
  }
}

const play = function (choice) {
  console.log(`I picked ${choice}.`);
  console.log(`The computer's choice is the ${computerChoice}.`);
  console.log(`The result is ${result(choice)}`);
}

play('paper');

*/

const computerTurn= () => {
  let randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0) {
    return 'rock';
  } else if(randomNumber===1) {
    return 'paper';
  } else if(randomNumber===2){
    return 'scissors';
  } else {
    return 'Error';
  }
}

const computerChoice=computerTurn();

const result= myChoice => {
  if(myChoice===computerChoice) {
    return 'Draw. =|';
  } else if(myChoice==='rock' && computerChoice==='scissors' || myChoice==='paper' && computerChoice==='rock' || myChoice==='scissors' && computerChoice==='paper') {
    return 'You win! ^_^';
  } else if(myChoice==='rock' && computerChoice==='paper' || myChoice==='paper' && computerChoice==='scissors' || myChoice==='scissors' && computerChoice==='rock') {
    return 'You lose. =('
  } else if(myChoice==='bomb') {
    return 'You win! ^_^ But you know it\'s not fair. So, you didn\'t xD'
  }
  else {
    return 'Error. You should input the correct data.'
  }
}

const play = choice => {
  choice=choice.toLowerCase();
  console.log(`I picked ${choice}.`);
  console.log(`The computer's choice is the ${computerChoice}.`);
  console.log(`The result is ${result(choice)}`);
}

play('Paper');

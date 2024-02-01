console.log('Hey!');
console.log('Let\'s play Rock, Paper, or Scissors game. It\'s so funny!');
console.log('\n');
console.log(`Here's how it works:

Rock crushes Scissors: If you choose Rock and your opponent chooses Scissors, you win!

Scissors cuts Paper: If you choose Scissors and your opponent chooses Paper, you win!

Paper covers Rock: If you choose Paper and your opponent chooses Rock, you win!

To play, simply type your choice - Rock, Paper, or Scissors. After that, computer will reveal his choice, and we'll see who comes out victorious.

Ready? What's your move?`);
console.log('\n');
console.log('\n');

/* For practice, let's create a short version. 

const computerTurn= function() {
  let randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0) {
    return 'Rock';
  } else if(randomNumber===1) {
    return 'Paper';
  } else if(randomNumber===2){
    return 'Scissors';
  } else {
    return 'Error';
  }
}

const computerChoice=computerTurn();

const result=function(myChoice) {
  if(myChoice===computerChoice) {
    return 'Draw. =|';
  } else if(myChoice==='Rock' && computerChoice==='Scissors' || myChoice==='Paper' && computerChoice==='Rock' || myChoice==='Scissors' && computerChoice==='Paper') {
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

play('Paper');

*/

const computerTurn= () => {
  let randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0) {
    return 'Rock';
  } else if(randomNumber===1) {
    return 'Paper';
  } else if(randomNumber===2){
    return 'Scissors';
  } else {
    return 'Error';
  }
}

const computerChoice=computerTurn();

const result= myChoice => {
  if(myChoice===computerChoice) {
    return 'Draw. =|';
  } else if(myChoice==='Rock' && computerChoice==='Scissors' || myChoice==='Paper' && computerChoice==='Rock' || myChoice==='Scissors' && computerChoice==='Paper') {
    return 'You win! ^_^';
  }
  else {
    return 'You lose. =('
  }
}

const play = choice => {
  console.log(`I picked ${choice}.`);
  console.log(`The computer's choice is the ${computerChoice}.`);
  console.log(`The result is ${result(choice)}`);
}

play('Paper');

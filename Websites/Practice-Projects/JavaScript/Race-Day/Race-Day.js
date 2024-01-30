let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 25;
let message = ''
/* For practice, creating conditional statements with if, else keywords and ternary operator. 
if (age > 18 && registeredEarly === true) {
  raceNumber+=1000;
  message=`Your race starts at 9:30 am. Your race number is ${raceNumber}`;
} else if (age>18 && registeredEarly === false) {
  message=`Your race starts at 11:00 am. Your race number is ${raceNumber}`;
} else if (age<18) {
  message=`You will run your race at 12:30pm (regardless of registration). Your race number is ${raceNumber}`;
} else {
  message=`This weekend we will hold a special race for those who are 18 years old. We invite everyone. You can come to the reception and register there.`;
}
*/
message=
  age > 18 && registeredEarly===true
  ? message=`Your race starts at 9:30 am. Your race number is ${raceNumber + 1000}`
  : age > 18 && registeredEarly === false
  ? message=`Your race starts at 11:00 am. Your race number is ${raceNumber}`
  : age < 18
  ? message=`You will run your race at 12:30pm (regardless of registration). Your race number is ${raceNumber}`
  : message=`This weekend we will hold a special race for those who are 18 years old. We invite everyone. You can come to the reception and register there.`
console.log(message);

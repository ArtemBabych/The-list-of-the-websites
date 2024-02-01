const getSleepHours = day => {
    switch (day) {
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 6;
    break;
    case 'wednesday':
    return 4;
    break;
    case 'thursday':
    return 10;
    break;
    case 'friday':
    return 11;
    break;
    case 'saturday':
    return 5;
    break;
    case 'sunday':
    return 6;
    break;
    default:
    return 'Error: incorrect input.';
    break;
    }
  }
  
  const getActualSleepHours= () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours= ()=>{
    const idealHours=8;
    return idealHours*7;
  }
  
  const calculateSleepDebt= ()=> {
    const actualSleepHours=getActualSleepHours();
    const idealSleepHours=getIdealSleepHours();
    return actualSleepHours===idealSleepHours
    ? `The user got the perfect amount of sleep. He slept ${actualSleepHours} hours a week and the ideal amount of hours for it is the same - ${idealSleepHours} hours.`
    : actualSleepHours>idealSleepHours
    ? `The user got more sleep than needed. He slept ${actualSleepHours} hours a week, but the ideal amount of sleep is ${idealSleepHours} hours. So, the user should sleep ${actualSleepHours - idealSleepHours} less hours per week.`
    : actualSleepHours < idealSleepHours
    ? `The user should get some rest. He slept ${actualSleepHours} hours a week, but the ideal amount of sleep is ${idealSleepHours} hours. So, the user should sleep ${idealSleepHours - actualSleepHours} more hours per week.`
    : 'Error.';
  }
  
  console.log(calculateSleepDebt());
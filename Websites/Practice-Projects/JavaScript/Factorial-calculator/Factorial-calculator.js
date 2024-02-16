function factorial(number) {
    let i = number - 1;
    let result = number;
    if (number === 0 || number === 1) {
        return 1;
    } else if( number<0) {
        return `The number must be 0 or positive.`
    } else {
        do {
            result *= i;
            i--;
        } while (i > 1);
        return result;
    };

};

console.log(factorial(8));
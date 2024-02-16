function factorial(number) {
    let i = number - 1;
    let result = number;
    if (number === 0 || number === 1) {
        return 1;
    } else {
        do {
            result *= i;
            i--;
        } while (i > 1);
        return result;
    };

};

console.log(factorial(8));
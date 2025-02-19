let fizzBuzzResult = '';

for (let i = 1; i <= 100; i++) {
    fizzBuzzResult += i;
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzResult += ` - делится и на 3 и на 5`;
    }
    else if (i % 3 === 0) {
        fizzBuzzResult += ` - делится на 3`;
    }
    else if (i % 5 === 0) {
        fizzBuzzResult += ` - делится на 5`;
    }
    fizzBuzzResult += '\n';
}
if (fizzBuzzResult.length > 0) {
    fizzBuzzResult = fizzBuzzResult.slice(0, -1);
}
console.log(fizzBuzzResult);
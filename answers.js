
function random(number1, number2) {
    if (number1 < number2) {
        return between(number1, number2)
    } else if (number1 > number2) {
        return between(number2, number1)
    }
    return number2;
}

function between(number1, number2) {
    return number1 + (Math.random() * (number2 - number1));
}

console.log(`Random 1:10 : ${random(1,10)}`);
console.log(`Random 10:1 : ${random(10,1)}`);
console.log(`Random 0:100 : ${random(0,100)}`);
console.log(`Random -500:0 : ${random(-500,0)}`);
console.log(`Random 5:5 : ${random(5,5)}`);

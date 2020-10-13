"use strict";

/*
1. Who is bigger?
*/
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


/*
2. Sum of digits
*/
function sumOfDigits(number) {
    let sum = 0
    let absNumber = Math.abs(number);
    while (absNumber > 0) {
        let digit = absNumber % 10;
        absNumber = (absNumber - digit) / 10;
        sum+=digit;
    }
    return sum;
}

console.log(`Sum of digits 165 : ${sumOfDigits(165)}`);
console.log(`Sum of digits -520 : ${sumOfDigits(520)}`);
console.log(`Sum of digits 0 : ${sumOfDigits(0)}`);

/*
3. Guessing game
*/
function guessingGame() {
    let number = Math.random() * 99 + 1;
    const guess = prompt('Guess the number between 1 and 100 ?');
    if (guess > number) {
        console.log("Too big");
    } else if (guess < number) {
        console.log("Too small");
    } else {
        console.log("Bingo!");
    }
}

console.log("You can play thte guessingGame by running guessingGame()");

/*
ROT13
*/
function rot13(word) {
    let result = "";
    let base = "a".charCodeAt(0);
    let top = "z".charCodeAt(0);
    let lowerWord = word.toLowerCase();
    for (let index in lowerWord) {
        let letterCode = lowerWord.charCodeAt(index);
        if (letterCode >= base && letterCode <= top) {
            letterCode = (letterCode + 13);
            letterCode = (letterCode - base) % 26 + base;
        }
        result = result + String.fromCharCode(letterCode);
    }
    return result;
}

console.log(`ROT13 of hello : ${rot13("hello")} should be uryyb`);
console.log(`ROT13 of javascript : ${rot13("javascript")} should be wninfpevcg`);
console.log(`ROT13 of rot13 : ${rot13("rot13")} should be ebg13`);

/*
More then 7 letters at least 1 big letter at least 1 small letter a number and something which is neither digit nor number
*/
function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (password.toLowerCase() == password) {
        return false;
    }
    if (password.toUpperCase() == password) {
        return false;
    }
    if (password.toLowerCase().match("^[0-9a-z]+$")) {
        return false;
    }
    return true;
}

console.log(`Password rot13 : ${isStrongPassword("rot13")}`);
console.log(`Password a4534636436346A : ${isStrongPassword("a4534636436346A")}`);
console.log(`Password Password4 : ${isStrongPassword("Password4")}`);
console.log(`Password Pass4! : ${isStrongPassword("Pass4!")}`);
console.log(`Password Password4! : ${isStrongPassword("Password4!")}`);

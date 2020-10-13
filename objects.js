"use strict";

/*
1. Picture gallery
*/
function getLeftValueForImage(images, widths, imageIndex) {
    let result = 0;
    for (let i =0 ; i < imageIndex; i++) {
        result-=widths[i]
    }
    return result;
}

const images = ['1.jpg', '2.jpg', '3.jpg'];
const widths = [200, 300, 400];

let leftValue = getLeftValueForImage(images, widths, 0);
console.log(`Left value should be 0: ${leftValue}`);
leftValue = getLeftValueForImage(images, widths, 1);
console.log(`Left value should be -200: ${leftValue}`);
leftValue = getLeftValueForImage(images, widths, 2);
console.log(`Left value should be -500: ${leftValue}`);
leftValue = getLeftValueForImage(images, widths, 3);
console.log(`Left value should be -900: ${leftValue}`);

function compareCars(car1, car2) {
    if (car1.speed > car2.speed) {
        return car1;
    }
    return car2;
}

/*
2. Fastest car
*/
function getFastestCar(cars) {
    return cars.reduce(compareCars);
}

const cars = [ { name: 'c1', color: 'red', speed: 40 }, { name: 'c2', color: 'blue', speed: 20 }];

const fastestCar = getFastestCar(cars);
console.log(fastestCar.name) // should print c1

/*
3. tic tac toe winner
*/

function checkLine(board, startX, startY, xInc,yInc) {
    let middleX = startX + xInc;
    let middleY =  startY + yInc;
    return (board[startX][startY] != ' ' && board[startX][startY] == board[middleX][middleY] && board[middleX + xInc][middleY + yInc] == board[middleX][middleY]);
}

function isGameDone(board) {
    let won = false;
    won = won || checkLine(board,0,0,0,1);
    won = won || checkLine(board,1,0,0,1);
    won = won || checkLine(board,2,0,0,1);
    won = won || checkLine(board,0,0,1,0);
    won = won || checkLine(board,0,1,1,0);
    won = won || checkLine(board,0,2,1,0);
    won = won || checkLine(board,0,0,1,1);
    won = won || checkLine(board,0,2,1,-1);
    return won;
}

const game1 = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];
console.log(`empty board: ${isGameDone(game1)}`);
const game2 = [
    ['X', ' ', ' '],
    [' ', 'O', ' '],
    ['X', ' ', ' '],
];
console.log(`no win board: ${isGameDone(game2)}`);
const game3 = [
    ['X', 'O', ' '],
    ['X', 'O', ' '],
    ['X', ' ', ' '],
];
console.log(`X win board: ${isGameDone(game3)}`);
const game4 = [
    ['X', ' ', ' '],
    ['O', 'O', 'O'],
    ['X', ' ', ' '],
];
console.log(`O win board: ${isGameDone(game4)}`);
const game5 = [
    ['X', ' ', ' '],
    ['O', 'X', 'O'],
    ['X', ' ', 'X'],
];
console.log(`X win board: ${isGameDone(game5)}`);



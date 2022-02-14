'use strict';
let randomNumber;
let number;

const createRandomNumber = function() {
    let min = 0;
    let max = 100;
    const getNumber = function() {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };   
    return getNumber;
};

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    
    let userNumber = prompt("Угадай число от 1 до 100");

    const check = function() {
        if (userNumber == null) {
            alert("Игра окончена");
        } else if (!isNumber(userNumber)) {
            userNumber = prompt("Введи число!");
            check();
        } else if (number > userNumber) {
            userNumber = prompt("Загаданное число больше");
            check();
        } else if (number < userNumber) {
            userNumber = prompt("Загаданное число меньше");
            check();
        } else if (number == userNumber){
            alert("Вы угадали!");
        }
    };
    check();
};

console.log(number);
randomNumber = createRandomNumber();
number = randomNumber();
asking();



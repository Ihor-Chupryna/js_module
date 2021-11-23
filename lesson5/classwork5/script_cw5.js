// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const showMinNumber = (num1, num2, num3) => {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1);
    } else if (num2 <= num3 && num2 <= num1) {
        console.log(num2);
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3);
    } else {
        console.log('error');
    }
}
showMinNumber(2, 3, 4);

(function (num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1);
    } else if (num2 <= num3 && num2 <= num1) {
        console.log(num2);
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3);
    } else {
        console.log('error');
    }
})(8, 6, 7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const showMaxNumber = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
    } else if (num2 >= num3 && num2 >= num1) {
        console.log(num2);
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
    } else {
        console.log('error');
    }
}
showMaxNumber(3, 4, 5);

(function (num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
    } else if (num2 >= num3 && num2 >= num1) {
        console.log(num2);
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
    } else {
        console.log('error');
    }
})(6, 7, 8);

// - створити функцію яка повертає найбільше число з масиву
arrNumber = [11, 25, 36, 258, 1024, 47, 669, 89, 54, 25];
const getMaxNumberArray = (array = []) => {
    let temp = 0;
    for (const number of array) {
        if (number > temp) temp = number;
    }
    return temp;
}
const maxNumber = getMaxNumberArray(arrNumber);
console.log(maxNumber);

(function (array = []) {
    let temp = 0;
    for (const number of array) {
        if (number > temp) temp = number;
    }
    console.log(temp);
})(arrNumber);

// - створити функцію яка повертає найменьше число з масиву
const getMinNumber = (array = []) => {
    let temp = 999999999;
    for (const number of array) {
        if (number < temp) temp = number;
    }
    return temp;
}
const minNumber = getMinNumber(arrNumber);
console.log(minNumber);

(function (array = []) {
    let temp = 999999999;
    for (const number of array) {
        if (number < temp) temp = number;
    }
    console.log(temp);
})(arrNumber);

//- створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumElementArray = (array = []) => {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
    }
    return temp;
}
const result = sumElementArray(arrNumber);
console.log(result);

(function (array = []) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
    }
    console.log(temp);
})(arrNumber);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const averageElementArray = (array = []) => {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
    }
    return temp / array.length;
}
const averageResult = averageElementArray(arrNumber);
console.log(averageResult);

(function (array = []) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
    }
    console.log(temp / array.length);
})(arrNumber);

// - створити функцію яка приймає будь-яку кількість чисел,
//повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const getMinShowMaxNumb = (...val) => {
    let min = 999999;
    let max = 0;
    for (const number of val) {
        if (min > number) {
            min = number;
        } else if (max < number) {
            max = number;
        }
    }
    console.log(max);
    return min;
}
const minNumb = getMinShowMaxNumb(1, 2, 12, 22, 58, 69, 658, 35);
console.log(minNumb);

(function () {
    let min = 999999;
    let max = 0;
    for (const number of arguments) {
        if (min > number) {
            min = number;
        } else if (max < number) {
            max = number;
        }
    }
    console.log(max);
    console.log(min);
}(1, 5, 6, 55, 454, 4, 54));

// - створити функцію яка заповнює масив рандомними числами
const arrNumb = [];
const randomNumbers = (array = []) => {
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 50));
    }
}
randomNumbers(arrNumb);
console.log(arrNumb);

const arrNumb2 = [];
(function (array = []) {
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 50));
    }
})(arrNumb2);
console.log(arrNumb2);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
const arrNumb3 = [];
const randomNumberWithLimit = (array = [], limit) => {
    for (let i = 0; i < limit; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
}
randomNumberWithLimit(arrNumb3, 10);
console.log(arrNumb3);

const arrNumb4 = [];
(function (array, limit) {
    for (let i = 0; i < limit; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
})(arrNumb4, 5);
console.log(arrNumb4);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const arrNumb5 = [1, 2, 3]
const arrayReverse = (array = []) => {
    let arr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
}
const reverse = arrayReverse(arrNumb5);
console.log(reverse);

const arrNumb6 = [4, 5, 6];
(function (array) {
    let arr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    console.log(arr);
})(arrNumb6);



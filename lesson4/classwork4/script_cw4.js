// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!);
function minNumber(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1);
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2);
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3);
    }
}
minNumber(66, 11, 9);

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
    }
}
maxNumber(128, 512, 256);

// - створити функцію яка повертає найбільше число з масиву
function maxNumberArray(arrayNumbers = []) {
    let compareNumber = 0;
    for (const number of arrayNumbers) {
        if (number > compareNumber) {
            compareNumber = number;
        }
    }
    return compareNumber;
}
let maxNumbArr = maxNumberArray([1, 5528, 256, 0, 256, 999]);
console.log(maxNumbArr);

// створити функцію яка повертає найменьше число з масиву
function minNumberArray(arrayNumbers = []) {
    return Math.min.apply(null, arrayNumbers);
}
let minNumbArr = minNumberArray([22, 1, 25, 25, 1, 11]);
console.log(minNumbArr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumElementArray(arrayNumbers = []) {
    let sum = 0;
    for (const number of arrayNumbers) {
        sum += number;
    }
    return sum;
}
const result = sumElementArray([23, 69, 11, 56]);
console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function meanValueArray(arrayNumber = []) {
    let sum = 0;
    for (const number of arrayNumber) {
        sum += number;
    }
    return sum / arrayNumber.length;
}
let meanValue = meanValueArray([5, 10, 15, 25, 5]);
console.log(meanValue);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMaxNumb() {
    let min = 9999999999;
    let max = 0;
    for (const number of arguments) {
        if (number < min) {
            min = number;
        } else if (number >= max) {
            max = number;
        }
    }
    console.log(max);
    return min;
}
const maxValue = minMaxNumb(20, 35, 847, 228, 314, 23, 16, 547, 4);
console.log(maxValue);

// - створити функцію яка заповнює масив рандомними числами
let arrEmpty = [];
function randomNumbers(emptyArray = []) {
    for (let i = 0; i < 15; i++) {
        emptyArray.push(Math.floor(Math.random() * (20 - 1) + 5));
    }
}
randomNumbers(arrEmpty);
console.log(arrEmpty);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomNumberWithLimit(arrayIter = [], limit) {
    for (let i = 0; i < limit; i++) {
        arrayIter.push(Math.floor(Math.random() * 100));
    }
}
let arrRandom = [];
randomNumberWithLimit(arrRandom, 25);
console.log(arrRandom);

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arrayReverse(arrayRev = []) {
    arrayRev.reverse()
}
arrayReverse(arrRandom);
console.log(arrRandom);
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function sumArg(a = '', b = '') {
    if (!!a === true && !!b === false) {
        console.log(a);
    } else if (!!a === false && !!b === true) {
        console.log(b);
    } else if (!!a === true && !!b === true) {
        console.log(a + b);
    } else {
        console.log('error');
    }
}

sumArg(5, 16);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
const arrayNumb1 = [1, 2, 3, 4];
const arrayNumb2 = [2, 3, 4, 5];

function sumIndexArray(array1 = [], array2 = []) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i])
    }
    return result;
}

const sumIndResult = sumIndexArray(arrayNumb1, arrayNumb2);
console.log(sumIndResult);
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
const arrUsers = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function returnKeyObject(array) {
    let keys = [];
    for (const element of array) {
        for (const key in element) {
            keys.push(key);
        }
    }
    return keys;
}

const userKeys = returnKeyObject(arrUsers);
console.log(userKeys);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function returnValueObject(array = []) {
    let value = [];
    for (const element of array) {
        for (const key in element) {
            value.push(element[key]);
        }
    }
    return value;
}

const userValues = returnValueObject(arrUsers);
console.log(userValues);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const arr1 = [9, 8, 0, 4];

function changeArrayElement(array = [], index) {
    if (index < array.length - 1) {
        let a = array[index];
        array[index] = array[index + 1];
        array[index + 1] = a;
    }
    return array;
}

const changeElement = changeArrayElement(arr1, 0);
console.log(changeElement);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let arr2 = [1, 0, 6, 0, 3];

function zeroSort(array = []) {
    let zero = [];
    let numb = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zero.push(array[i]);
        } else {
            numb.push(array[i]);
        }
    }
    return numb.concat(zero);
}

const resultArray = zeroSort(arr2);
console.log(resultArray);

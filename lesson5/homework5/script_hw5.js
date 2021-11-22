// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
const calcArea = (a, b) => a * b;
console.log(calcArea(5, 25));

(function (a, b) {
    console.log(a * b)
}(5, 25));

// - створити функцію яка обчислює та повертає площу кола
const calcAreaCircle = (radiusCir) => 3.14 * Math.pow(radiusCir, 2);
console.log(calcAreaCircle(12));

(function (radiusCir) {
    console.log(3.14 * Math.pow(radiusCir, 2))
}(12));

// - створити функцію яка обчислює та повертає площу циліндру
const calcAreaCylinder = (radiusCyl, heightCyl) => 2 * 3.14 * radiusCyl * heightCyl;
console.log(calcAreaCylinder(5, 10));

(function (radiusCyl, heightCyl) {
    console.log(2 * 3.14 * radiusCyl * heightCyl);
}(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
const numbArray = [12, 25, 36, 56, 2, 256, 698, 65, 1024, 89];

const showElemArray = (array = []) => {
    for (const item of array) {
        console.log(item);
    }
}
showElemArray(numbArray);

(function (array = []) {
    for (const item of array) {
        console.log(item);
    }
}(numbArray));

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const createParagraphWithText = (text) => document.write(`<p>${text}</p>`);
createParagraphWithText('arrow function');

(function (text) {
    document.write(`<p>${text}</p>`);
}('hello'));

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
createList('hello');

(function (text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}('JS'));

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createListWithLimit = (text, limit) => {
    document.write(`<ul>`);
    for (let i = 0; i < limit; i++) {
        document.write(`<li>${text} ${i + 1}</li>`);
    }
    document.write(`</ul>`);
}
createListWithLimit('item', 5);

(function (text, limit) {
    document.write(`<ul>`);
    for (let i = 0; i < limit; i++) {
        document.write(`<li>${text} ${i + 1}</li>`);
    }
    document.write(`</ul>`);
}('text', 5));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrElement = [12, true, 'snap', 58, false, 'index', 584, 'point', true, 'older'];
const listElement = (array = []) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
listElement(arrElement);

(function (array = []) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}(arrElement));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const arrayUsers = [
    {id: 1, name: 'Andrey', age: 28,}, {id: 2, name: 'Katya', age: 30,}, {id: 3, name: 'Oleh', age: 34,},
];
let userBlock = (array = []) => {
    for (const user of array) {
        document.write(`<div><h2>${user.id} ${user.name} ${user.age}</h2></div>`);
    }
}
userBlock(arrayUsers);

(function (array = []) {
    for (const user of array) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
(arrayUsers));


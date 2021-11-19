// - створити функцію яка обчислює та повертає площу прямокутника висотою
function areaCalculator(a, b) {
    return a * b;
}

let resultSquare = areaCalculator(5, 5);
console.log(resultSquare);

// - створити функцію яка обчислює та повертає площу кола
function areaCircleCalculator(radius) {
    return 3.14 * Math.pow(radius, 2);

}

let areaCircle = areaCircleCalculator(2);
console.log(areaCircle);

// - створити функцію яка обчислює та повертає площу циліндру
function areaCylinderCalculator(height, diameter) {
    return 3.14 * Math.pow((diameter / 2), 2) * height
}

let areaCylinder = areaCylinderCalculator(10, 5);
console.log(areaCylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayIter(array = []) {
    for (const element of array) {
        console.log(element);
    }
}

arrayIter(['JS', 15, true, 25]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('Hello my name is ......');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createList('item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListWithLimit(text, limit) {
    document.write(`<ul>`)
    for (let i = 0; i < limit; i++) {
        document.write(`<li>${text} ${[i + 1]}</li>`);
    }
    document.write(`</ul>`);
}

createListWithLimit('item', 20);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listForElement(array = []) {
    document.write(`<ul>`)
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`)
}

const arrayElem = [125, 'display', false, 268, 'backup', 158];
listForElement(arrayElem);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userArray = [
    {id: 1, name: 'Ivan', age: 25}, {id: 2, name: 'Sveta', age: 28}, {id: 3, name: 'Dima', age: 23}
];

function createUserObject(arrayUser) {
    for (const user of arrayUser) {
        document.write(`<div><h2>${user.id} ${user.name}${user.age}</h2></div>`);
    }
}

createUserObject(userArray);
// --створити масив з:
//  - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrNumber = [5, 325, 75, 69, 225];
let arrString = ['payment', 'subway', 'ellipse', 'bed', 'test'];
let arrMix = ['fuel', 558, true, 'terminal', 87];
console.log(arrMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpty = [];
arrEmpty[0] = 'form';
arrEmpty[1] = true;
arrEmpty[2] = 2667;
arrEmpty[3] = 'network';
arrEmpty[4] = false;
console.log(arrEmpty);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>item</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>item ${i}<div/>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let k = 0;
while (k < 20) {
    document.write(`<h1>test</h1>`)
    k++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write(`<h1>test ${j}<h1/>`)
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumb = [12, 23, 25, 668, 874, 1, 55, 63, 589, 32];
for (const number of arrNumb) {
    console.log(number)
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStr = ['previous', 'scare', 'extra', 'perform', 'transfer', 'key', 'wealth', 'channel', 'brand', 'house'];
for (const string of arrStr) {
    console.log(string)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrMixed = [235, true, 556, 'central', false, 'contact', 987, 'email', false, 332];
for (let i = 0; i < arrMixed.length; i++) {
    console.log(arrMixed[i])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrMixed1 = [false, 365, 'base', true, 556, 'story', false, 78, 983, 'road'];
for (const element of arrMixed1) {
    if (typeof element  === 'boolean') {
        console.log(element)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrMixed2 = ['invent', 235, false, 256, 697, 'orange', true, 689, 'bird', true];
for (const elemArr of arrMixed2) {
    if (typeof elemArr === 'number') {
        console.log(elemArr)
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrMixed3 = ['supper', 26, 'fetch', false, 658, true, 'restore', 887, true, 'class'];
for (const elem of arrMixed3) {
    if (typeof elem === 'string') {
        console.log(elem)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray = [];
emptyArray[0] = 125;
emptyArray[1] = 'only'
emptyArray[2] = false;
emptyArray[3] = 6663;
emptyArray[4] = 'vision';
emptyArray[5] = true;
emptyArray[6] = 996;
emptyArray[7] = 'wide';
emptyArray[8] = true;
emptyArray[9] = 'extra';
for (let i = 0; i < emptyArray.length; i++ ) {
    console.log(emptyArray[i])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i = i + 2) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i}`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`${i}`)
    }
}
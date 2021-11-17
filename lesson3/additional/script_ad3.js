// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
const emtArray = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        emtArray[i] = i
    }
}
console.log(emtArray);

//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        emtArray[i] = i
    }
}
console.log(emtArray);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    emtArray[i] = Math.floor(Math.random() * (100 - 1) + 1)
}
console.log(emtArray);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    emtArray[i] = Math.floor(Math.random() * (732 - 8))
}
console.log(emtArray);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < emtArray.length; i = i + 3) {
    console.log(emtArray[i])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < emtArray.length; i = i + 3) {
    if (emtArray[i] % 2 === 0)
        console.log(emtArray[i])
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const numbArray = [];
for (let i = 2; i < emtArray.length; i = i + 3) {
    if (emtArray[i] % 2 === 0) {
        console.log(emtArray[i]);
        numbArray[i] = i
    }
}
console.log(numbArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
const numbArray1 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < numbArray1.length; i++) {
    if (numbArray1[i + 1] % 2 === 0) {
        console.log(numbArray1[i])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const numbArray2 = [100, 250, 50, 168, 120, 345, 188];
let result = 0;
for (let i = 0; i < numbArray2.length; i++) {
    result += numbArray2[i] / numbArray2.length;
}
console.log(result);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const numbArrRandom = [22, 55, 66, 1, 685, 957, 2, 58, 87, 68];
const numbArrResult = [];
for (let i = 0; i < numbArrRandom.length; i++) {
    numbArrResult[i] = numbArrRandom[i] * 5
}
console.log(numbArrResult);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
const mixArray = [224, false, 'central', true, 668, 'front', 748, 'object', 1024, false];
const resultArray = [];
for (let i = 0; i < mixArray.length; i++) {
    if (typeof mixArray[i] === 'number') {
        resultArray[i] = mixArray[i]
    }
}
console.log(resultArray);

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 4, name: 'www', age: 22, status: true}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
let usersWithCities = [];
for (const userId of usersWithId) {
    for (const cityId of citiesWithId) {
        if (userId.id === cityId.user_id) {
            let obj = {};
            obj.id = userId.id;
            obj.name = userId.name;
            obj.age = userId.age;
            obj.status = userId.status;
            obj.address = cityId;
            usersWithCities.push(obj)
        }
    }
}
console.log(usersWithCities);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrNumbRand = [21, 268, 13, 986, 6691, 231, 58, 985, 5, 42];
for (let i = 0; i < arrNumbRand.length; i++) {
    if (arrNumbRand[i] % 2 === 0) {
        console.log(arrNumbRand[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const newArrayNumb = [];
for (let i = 0; i < arrNumbRand.length; i++) {
    newArrayNumb[i] = arrNumbRand[i];
    console.log()
}
console.log(newArrayNumb);

// - Дано масив: [ 'a', 'b', 'c'] .
const arrLetters = ['a', 'b', 'c'];

// За допомогою циклу for зібрати всі букви в слово.
let a = '';
for (let i = 0; i < arrLetters.length; i++) {
    a += arrLetters[i];
}
console.log(a);

// За допомогою циклу while зібрати всі букви в слово.
let b = '';
let i = 0;
while (i < arrLetters.length) {
    b += arrLetters[i];
    i ++;
}
console.log(b);

// За допомогою циклу for of зібрати всі букви в слово.
let c = '';
for (const cElement of arrLetters) {
    c += cElement;
}
console.log(c);
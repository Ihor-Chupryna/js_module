// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній resul
let arrNumber = [2, 33, 45, 423, 3, 23, 1035, 663, 9, 33];
let result = arrNumber[0] + arrNumber[1] + arrNumber[2] + arrNumber[3] + arrNumber[4] + arrNumber[5] + arrNumber[6] + arrNumber[7] + arrNumber[8] + arrNumber[9];
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'JavaScript',
    pages: 256,
    genre: 'horror'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let objBook = {
    name: 'Apple on the snow',
    pages: 656,
    genre: 'comedy',
    authors: ['Chupryna I.V.', 'Ivanov S.S', 'Petrov S.S.']
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let arrBook = [
    {name: 'Buratino', pages: 666, genre: 'comedy', authors: ['Ivanov S.S', 'Petrov S.S.']},
    {name: 'Cheburashka', pages: 333, genre: 'horror', authors: ['Zaycev S.S.', 'Zhukov V.V.']},
];
console.log(arrBook[0]);
console.log(arrBook[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = 3.14 * Math.pow((dC/2), 2) * heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);



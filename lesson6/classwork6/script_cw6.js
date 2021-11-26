// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
const nameCorrector = (name) => {
    let correct = name.replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ');
    return correct.split(' ').filter(value => !(value === '')).join(' ');
}
console.log(nameCorrector(n1));
console.log(nameCorrector(n2));
console.log(nameCorrector(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomNumbers(arr = [], limit) {
    for (let i = 0; i < limit; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    console.log(arr);
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
const numbersArr = [];
randomNumbers(numbersArr, 20);
const ascendingNumber = numbersArr.sort((a, b) => {
    return a - b;
});
console.log(ascendingNumber);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
const pairedNumbers = numbersArr.filter(value => value % 2 === 0);
console.log(pairedNumbers);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let fromNumbToString = numbersArr.map(value => value + '');
console.log(fromNumbToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (array = [], direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a)
    }
    return 'error';
}
console.log(sortNums(nums, 'ascending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// - відсортувати його за спаданням за monthDuration
const monthDurationAscending = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(monthDurationAscending);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const monthFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(monthFilter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let str = 'наслаждение';

function cutString(str, n) {
    let result = [];
    for (let i = 0; i < str.length; i = i + n) {
        result.push(str.substr(i, n));
    }
    return result.join(',');
}
document.writeln(cutString(str, 3));





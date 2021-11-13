// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 59;
if (time > 0 && time <= 15) {
    console.log('first half of the honor');
} else if (time > 15 && time <= 30) {
    console.log('second half of an hour');
} else if (time > 30 && time <= 45) {
    console.log('third half of an hour');
} else if (time > 45 && time < 60) {
    console.log('fourth half of an hour');
} else {
    console.log('Error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if (day > 0 && day <= 10) {
    console.log('first half of month');
} else if (day > 10 && day <= 20) {
    console.log('second half of the mouth');
} else if (day > 20 && day <= 31) {
    console.log('third half of the month');
} else {
    console.log('error');
}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false;
!test ? console.log('Вірно') : console.log('Неправильно');
test ? console.log('Вірно') : console.log('Неправильно');

// /- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0 ? console.log('Вірно') : console.log('Невірно');

// -Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayWeek = 7;
switch (dayWeek) {
    case 1:
        console.log('Monday: JS lecture');
        break;
    case 2:
        console.log('Tuesday: Watch preview');
        break;
    case 3:
        console.log('Wednesday: Lecture on cycles JS');
        break;
    case 4:
        console.log('Thursday: JS practice');
        break;
    case 5:
        console.log('Friday: Lecture on functions JS');
        break;
    case 6:
        console.log('Saturday: English lesson');
        break;
    case 7:
        console.log('Sunday: To do Homework');
        break;
    default:
        console.log('error');
        break;
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = 2000;
if (year % 4 === 0) {
    console.log('Високосний рік');
} else {
    console.log('Звичайний рік');
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let nameJS = 'ECMAScript';
if (nameJS === "ECMAScript") {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}

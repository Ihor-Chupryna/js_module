// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
const str2 = 'lorem ipsum';
const str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const upperCase1 = str1.toUpperCase();
const upperCase2 = str2.toUpperCase();
const upperCase3 = str3.toUpperCase();
console.log(upperCase1, upperCase2, upperCase3);

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const lowerCase1 = upperCase1.toLowerCase();
const lowerCase2 = upperCase2.toLowerCase();
const lowerCase3 = upperCase3.toLowerCase();
console.log(lowerCase1, lowerCase2, lowerCase3);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
const resultStr = dirtyStr.trim();
console.log(resultStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
const stringToArray = (string) => string.split(' ');
let str = 'Каждый охотник желает знать';
let arr = stringToArray(str);
document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//  let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
const delete_characters = (string, number) => string.slice(0, number);
document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//  let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
const insert_dash = (string) => string.replaceAll(' ', '-').toUpperCase();
let strSkills = "HTML JavaScript PHP";
document.writeln(insert_dash(strSkills));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let testString = 'javascript is cool';
const firstSymbolToUpperCase = (string) => {
    let firstSymbol = string.slice(0, 1).toUpperCase();
    let restSymbols = string.slice(1);
    return firstSymbol.concat(restSymbols);
}
const firstSymbol = firstSymbolToUpperCase(testString);
console.log(firstSymbol);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize = (string) => {
    let array = [];
    for (const element of string.split(' ')) {
        let firstSymbol = element.slice(0, 1).toUpperCase();
        let restSymbol = element.slice(1);
        array.push(firstSymbol.concat(restSymbol));
    }
    return array.join(' ');
}
const everySymbol = capitalize(testString);
console.log(everySymbol);


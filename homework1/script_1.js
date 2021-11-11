// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bul1 = true;
let bul2 = false;
console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bul1, bul2);
// alert(str1);
// alert(str2);
// alert(str3);
// alert(str4);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(num7);
// alert(bul1);
// alert(bul2);
document.write(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bul1, bul2);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//Вивести кожну змінну за допомогою: console.log , alert, document.write
str1 = 'JS';
str2 = 'module';
str3 = 'sep-2021';
str4 = 'begin';
num1 = 232;
num2 = 1515;
num3 = -456;
num4 = 986;
num5 = -325;
num6 = 4.58;
num7 = 85;
bul1 = false;
bul2 = true;
console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bul1, bul2);
// alert(str1);
// alert(str2);
// alert(str3);
// alert(str4);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(num7);
document.write(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bul1, bul2);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName = 'Ihor';
let middleName = 'Victorovich';
let lastName = 'Chupryna';
let person = `${firstName} ${middleName} ${lastName}`;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let enterFirstName = prompt('Імя');
let enterMiddleName = prompt('По батькові');
let enterAge = +prompt('Вік');
// alert(`Вітаю ${enterFirstName} ${enterMiddleName}. Тобі ${enterAge} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//  5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); -> 205
// document.write(str - a + "<br/>"); -> 15
// document.write(str * "2" + "<br/>"); -> 40
// document.write(str / 2 + "<br/>"); -> 10
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
const getIdContent = document.getElementById('content');
console.log(getIdContent);

// -- отримує текст з блоку з id "rules"
const getIdRules = document.getElementById('rules');
console.log(getIdRules);

// -- замініть текст параграфа з id 'content' на будь-який інший
getIdContent.innerText = 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший
getIdRules.innerText = 'Okten';

// -- змініть кожному елементу колір фону на червоний
getIdContent.style.background = 'red';
getIdRules.style.background = 'red';

// -- змініть кожному елементу колір тексту на синій
getIdContent.style.color = 'blue';
getIdRules.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(getIdRules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const getClassFcRules = document.getElementsByClassName('fc_rules');
for (const rule of getClassFcRules) {
    rule.style.background = 'red';
    rule.style.color = 'blue';
}
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
const getIdMainHeader = document.getElementById('main_header');
getIdMainHeader.classList.add('sep_2021');

console.log(getIdMainHeader);

// b) робить шириниу елементу ul 400px
const getUlElement = document.getElementsByTagName('ul');
for (const element of getUlElement) {
    element.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const getClassLinklist = document.getElementsByClassName('linkList');
for (const element of getClassLinklist) {
    element.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
const getClassListElement2 = document.getElementsByClassName('listElement2');
console.log(getClassListElement2[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
const getLiElements = document.getElementsByTagName('li');
for (const elementLi of getLiElements) {
    elementLi.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const getAelements = document.getElementsByTagName('a');
for (const elementA of getAelements) {
    elementA.classList.add('anchor');
    elementA.classList.add(elementA.innerText);
    if (elementA.innerText === 'link3') {
        elementA.style.fontSize = '40px'
    }
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const getClassSubHeader = document.getElementsByClassName('sub-header');
for (const element of getClassSubHeader) {
    element.style.background = prompt('enter background');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
for (const element of getClassSubHeader) {
    if (element.innerText === 'content 2 segment') {
        element.style.fontSize = prompt('enter color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const getClassContent1 = document.getElementsByClassName('content_1');
getClassContent1[0].innerText = prompt('enter text');

// l) отримати елементи p та змінити їм padding на 20px
const getPelement = document.getElementsByTagName('p');
for (const elementP of getPelement) {
    elementP.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const getClassText2 = document.getElementsByClassName('text2');
getClassText2[0].innerText = 'Hello Okten'

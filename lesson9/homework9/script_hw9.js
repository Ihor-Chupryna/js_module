// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const elemDiv = document.createElement('div');
elemDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
elemDiv.style.background = 'grey';
elemDiv.style.color = 'blue';
elemDiv.style.fontSize = '30px';
document.body.appendChild(elemDiv);
document.body.appendChild(elemDiv.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
const products = ['Main', 'Products', 'About us', 'Contacts'];
const getClassMeny = document.getElementsByClassName('menu');
console.log(getClassMeny);
for (const product of products) {
    let li = document.createElement("li")
    li.innerText = product;
    getClassMeny[0].appendChild(li);
}

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const coursesAndDurationArrayDiv = document.createElement('div');
document.body.appendChild(coursesAndDurationArrayDiv);
for (const element of coursesAndDurationArray) {
    console.log(element);
    let elemDivCourses = document.createElement('div');
    elemDivCourses.innerText = `${element.title} ${element.monthDuration}`;
    coursesAndDurationArrayDiv.appendChild(elemDivCourses);
}

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
const coursesDiv = document.createElement('div');
document.body.appendChild(coursesDiv);
for (const coursesElement of coursesAndDurationArray) {
    let coursesElemDiv = document.createElement('div');
    coursesElemDiv.classList.add('item');
    coursesDiv.appendChild(coursesElemDiv);
    let elemH1 = document.createElement('h1');
    elemH1.classList.add('heading');
    elemH1.innerText = coursesElement.title;
    let elemP = document.createElement('p');
    elemP.classList.add('description');
    elemP.innerText = coursesElement.monthDuration;
    coursesElemDiv.append(elemH1, elemP);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*шири
document.onclick = function (ev) {
    console.log({
        id: ev.target.id,
        tadName: ev.target.localName,
        classList: ev.target.classList.value,
        tagWidth: ev.target.clientWidth,
        tagHeight: ev.target.clientHeight
    });
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
const infoList = document.createElement('ul');
infoList.classList.add('st');
document.body.appendChild(infoList);
infoList.style.width = '200px'
infoList.style.background = '#d9d6f6'
infoList.style.listStyle = 'none';
infoList.style.position = 'absolute';
document.onmousedown = (ev) => {
    let tagId = document.createElement('li');
    tagId.innerHTML = `tag id: ${ev.target.id}`;
    let tagName = document.createElement('li');
    tagName.innerHTML = `tag name: ${ev.target.localName}`;
    let tagClassList = document.createElement('li');
    tagClassList.innerHTML = `class list: ${ev.target.classList.value}`;
    let tagWidth = document.createElement('li');
    tagWidth.innerHTML = `tag width: ${ev.target.clientWidth}`;
    let tagHeight = document.createElement('li');
    tagHeight.innerHTML = `tag height: ${ev.target.clientHeight}`
    infoList.style.top = ev.clientY + 'px';
    infoList.style.left = ev.clientX + 'px';
    infoList.style.display = 'block';
    infoList.append(tagId, tagName, tagClassList, tagWidth, tagHeight);
}
document.onmouseup = () => {
    infoList.innerHTML = null;
}

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 28, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
//  Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const userFilter = document.forms.userFilter;
userFilter.onsubmit = (ev) => {
    ev.preventDefault();
    let status = userFilter.status.checked;
    let age = userFilter.age.checked;
    let city = userFilter.city.checked;
    if (status && !age && !city) {
        console.log(usersWithAddress.filter(value => value.status === false));
    } else if (status && age && !city) {
        console.log(usersWithAddress.filter(value => value.status === false && value.age > 29));
    } else if (status && city && !age) {
        console.log(usersWithAddress.filter(value => value.status === false && value.address.city === 'Kyiv'));
    } else if (age && !status && !city) {
        console.log(usersWithAddress.filter(value => value.age > 29));
    } else if (age && city && !status) {
        console.log(usersWithAddress.filter(value => value.age > 29 && value.address.city === 'Kyiv'));
    } else if (city && !status && !age) {
        console.log(usersWithAddress.filter(value => value.address.city === 'Kyiv'));
    } else if (city && status && age) {
        console.log(usersWithAddress.filter(value => value.status === false && value.age > 29 && value.address.city === 'Kyiv'));
    }
}
// Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
const imageArray = [
    {
      url: 'image/Maggie.jpg',
      alt: ''
    },
    {
        url: 'image/Liza_Simpson.jpg'
    },
    {
        url: 'image/Homer_Simpson.png',
        alt: ''
    },
];
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const img = document.getElementById('img');
img.style.width = '200px';
img.style.height = '250px';
let curIndex = 0;
previousBtn.onclick = () => {
    if (curIndex - 1 < 0) {
        curIndex = imageArray.length - 1;
    } else {
        curIndex = curIndex - 1;
    }
   img.src = imageArray[curIndex].url;
}
nextBtn.onclick = () => {
    if (curIndex + 1 > imageArray.length - 1) {
        curIndex = 0;
    } else {
        curIndex = curIndex + 1;
    }
    img.src = imageArray[curIndex].url;
}

// При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан






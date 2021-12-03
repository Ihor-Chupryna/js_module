
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45, www: 14}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
const arrAddressUser = [];
console.log(arrAddressUser);
for (const user of users) {
    let copyAddress = JSON.parse(JSON.stringify(user.address));
    arrAddressUser.push(copyAddress);

}
// за допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
const usersDiv = document.createElement('div');
document.body.appendChild(usersDiv);
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    usersDiv.appendChild(userDiv);
}
// - За допомоги циклу проітерувати  масив users,
//  записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
const usersDiv2 = document.createElement('div');
document.body.appendChild(usersDiv2);
usersDiv2.innerHTML = '<br>'
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = '<hr>';
    usersDiv2.appendChild(userDiv);
    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = user.name;
    let ageDiv = document.createElement('div');
    ageDiv.innerHTML = user.age;
    let statusDiv = document.createElement('div');
    statusDiv.innerHTML = user.status;
    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
const userDiv3 = document.createElement('div');
document.body.appendChild(userDiv3);
userDiv3.innerHTML = '<br>';
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = '<hr>';
    userDiv3.appendChild(userDiv);
    let nameDiv2 = document.createElement('div');
    nameDiv2.innerHTML = user.name;
    let ageDiv2 = document.createElement('div');
    ageDiv2.innerHTML = user.age;
    let statusDiv2 = document.createElement('div');
    statusDiv2.innerHTML = user.status;
    let addressDiv2 = document.createElement('div');
    for (const item in user.address) {
        let addressItemDiv = document.createElement('div');
        addressItemDiv.innerHTML = user.address[item];
        addressDiv2.appendChild(addressItemDiv);
    }
    userDiv.append(nameDiv2, ageDiv2, statusDiv2, addressDiv2);
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
const getIdContent = document.getElementById('content');
const getIdWrap = document.getElementById('wrap');
const getH2elem = getIdWrap.getElementsByTagName('h2');
const headerUl = document.createElement('ul');
getIdContent.appendChild(headerUl);
for (const element of getH2elem) {
    let headerLi = document.createElement('li');
    headerLi.innerText = element.innerText;
    headerUl.appendChild(headerLi);
}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];
const rulesDiv = document.createElement('div');
rulesDiv.id = 'wrap';
let ruleCounter = 1;
for (const rule of rules) {
    let ruleDiv = document.createElement('div');
    document.body.appendChild(rulesDiv);
    ruleDiv.classList.add('rules');
    ruleDiv.classList.add('rule' + ruleCounter);
    ruleCounter ++;
    let headerH2 = document.createElement('h2');
    headerH2.innerHTML = rule.title;
    let contentP = document.createElement('p');
    contentP.innerHTML = rule.body;
    ruleDiv.append(headerH2, contentP);
    rulesDiv.appendChild(ruleDiv);
}
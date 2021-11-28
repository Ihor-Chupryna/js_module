// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const vasya = new User(7, 'Vasya', 'Petrov', 'petrov@gmail.com', '0976584121');
const masha = new User(5, 'Masha', 'Petrova', 'petrova@GMAIL.com', '0951057487');
const dima = new User(8, 'Dima', 'Ivanov', 'ivanov@gmsil.com', '0664589852');
const marina = new User(10, 'Merina', 'Chupryna', 'chupr@gmail.com', '0996582314');
const karina = new User(2, 'Karina', 'Ivanova', 'ivanova@gmail.com', '0965487432');
const elena = new User(1, 'Elena', 'Petrova', 'elpetrova@gmsil.com', '0678596532');
const sergey = new User(9, 'Sergey', 'Levchenko', 'levch@gmail.com', '0975684125');
const ihor = new User(6, 'Ihor', 'Chupryna', 'chupr@gmail.com', '0663524178');
const aleksandr = new User(3, 'Aleksandr', 'Fedorenko', 'fedor@gmail.com', '0675824131');
const iryna = new User(4, 'Iryna', 'Kravets', 'krav@gmail.com', '0684597487');
const arrUser = [vasya, masha, dima, marina, karina, elena, sergey, ihor, aleksandr, iryna];
console.log(arrUser);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
const evenId = arrUser.filter(value => value.id % 2 === 0);
console.log(evenId);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const userIdAscending = arrUser.sort((a, b) => a.id - b.id);
console.log(userIdAscending);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const vasyaCl = new Client(7, 'Vasya', 'Petrov', 'petrov@gmail.com', '0976584121', ['milk', 'bread', 'cola']);
const mashaCl = new Client(5, 'Masha', 'Petrova', 'petrova@GMAIL.com', '0951057487', ['beer', 'cheps', 'vodka', 'jin']);
const dimaCl = new Client(8, 'Dima', 'Ivanov', 'ivanov@gmsil.com', '0664589852', ['cheese', 'juice']);
const marinaCl = new Client(10, 'Merina', 'Chupryna', 'chupr@gmail.com', '0996582314', ['whisky', 'jin', 'pizza']);
const karinaCl = new Client(2, 'Karina', 'Ivanova', 'ivanova@gmail.com', '0965487432', ['water']);
const elenaCl = new Client(1, 'Elena', 'Petrova', 'elpetrova@gmsil.com', '0678596532', ['whisky', 'jin', 'vodka', 'cigarettes', 'pepsi']);
const sergeyCl = new Client(9, 'Sergey', 'Levchenko', 'levch@gmail.com', '0975684125', ['apple', 'orange', 'strawberry']);
const ihorCl = new Client(6, 'Ihor', 'Chupryna', 'chupr@gmail.com', '0663524178', ['soap, shampoo']);
const aleksandrCl = new Client(3, 'Aleksandr', 'Fedorenko', 'fedor@gmail.com', '0675824131', ['pasts', 'cheese']);
const irynaCl = new Client(4, 'Iryna', 'Kravets', 'krav@gmail.com', '0684597487', ['tomato', 'meat', 'bread', 'bear']);
const clientArr = [vasyaCl, mashaCl, dimaCl, marinaCl, karinaCl, elenaCl, sergeyCl, ihorCl, aleksandrCl, irynaCl];
console.log(clientArr);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClientOrder = clientArr.sort((a, b) => a.order.length - b.order.length);
console.log(sortClientOrder);
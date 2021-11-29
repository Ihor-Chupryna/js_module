// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`виробник: ${this.manufacturer}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver = {name: 'dima', age: 25}) {
        this.driver = driver;
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class NewCar {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    info() {
        console.log(`виробник: ${this.manufacturer}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {name: 'Vasya', age: 35}) {
        this.driver = driver;
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, foot) {
    this.name = name;
    this.age = age;
    this.footSize = foot;
}

const anna = new Cinderella('Anna', 31, 36);
const vera = new Cinderella('Vera', 22, 37,);
const larisa = new Cinderella('Larisa', 29, 42);
const marina = new Cinderella("Marina", 27, 39);
const ellen = new Cinderella('Ellen', 28, 41);
const olga = new Cinderella('Olga', 31, 38);
const alla = new Cinderella('Alla', 26, 36);
const polina = new Cinderella('Polina', 22, 40);
const nina = new Cinderella('Nina', 21, 35);
const oksana = new Cinderella('Oksana', 29, 43);
const cinderellas = [anna, vera, larisa, marina, ellen, olga, alla, polina, nina, oksana];

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

    findCinderella() {

        for (const cinderella of cinderellas) {
            if (this.foundShoe === cinderella.footSize) {
                console.log(cinderella);
            }
        }
    }
}

const anatoliy = new Prince('Anatoliy', 37, 39);
console.log(anatoliy);
anatoliy.findCinderella(37);

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const ivan = new Prince('Ivan', 36, 36);
const findCinderella = cinderellas.find(value => value.footSize === ivan.foundShoe);
console.log(findCinderella);




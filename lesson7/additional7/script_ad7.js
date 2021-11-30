// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class User {
    constructor(id, name, username, email, addressStreet, addressSuite, addressCity,
                addressZipcode, geoLat, geoLng, phone, website, companyName,
                companyCatchPhrase, companyBs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: addressStreet,
            suite: addressSuite,
            city: addressCity,
            zipcode: addressZipcode,
            geo: {
                lat: geoLat,
                lng: geoLng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase: companyCatchPhrase,
            bs: companyBs
        }
    }
}

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
class Attribute {
    constructor(titleOfAttr, actionOfAttr) {
        this.title = titleOfAttr;
        this.action = actionOfAttr;
    }

}
class Tag {
    constructor(titleOfTag, action, attrs = []) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}
const aAtr1 = new Attribute('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
const aAtr2 = new Attribute('coords', 'Устанавливает координаты активной области.');
const aTag = new Tag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [aAtr1, aAtr2]);
console.log(aTag);
const divAtr1 = new Attribute('align', 'Добавляет выравнивание содержимого тега <div>.');
const divAtr2 = new Attribute( 'title', 'Добавляет всплывающую подсказку к содержимому.');
const divTag = new Tag('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [divAtr1, divAtr2]);
console.log(divTag);
const h1Atr1 = new Attribute('align', 'Определяет выравнивание заголовка.');
const h1Atr2 = new Attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const h1Tag = new Tag('<h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
    [h1Atr1, h1Atr2]);
console.log(h1Tag);
const spanAtr1 = new Attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const spanAtr2 = new Attribute('id', 'Указывает имя стилевого идентификатора.');
const spanTag = new Tag('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',
    [spanAtr1, spanAtr2]);
console.log(spanTag);
const inputAtr1 = new Attribute('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
const inputAtr2 = new Attribute('accesskey', 'Переход к элементу с помощью комбинации клавиш.');
const inputTag = new Tag('<input>', 'ег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [inputAtr1, inputAtr2]);
console.log(inputTag);
const formAtr1 = new Attribute('action', 'Адрес программы или документа, который обрабатывает данные формы.');
const formAtr2 = new Attribute('method', 'Метод протокола HTTP.');
const formTag = new Tag('<form>', 'Тег <form> устанавливает форму на веб-странице.',
    [formAtr1, formAtr2]);
console.log(formTag);
const optionArt1 = new Attribute('disabled', 'Заблокировать для доступа элемент списка.');
const optionAtr2 = new Attribute('label', 'Указание метки пункта списка.');
const optionTag = new Tag('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [optionArt1, optionAtr2]);
console.log(optionTag);
const selectAtr1 = new Attribute('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.');
const selectAtr2 = new Attribute('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.');
const selectTag = new Tag('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.',
    [selectAtr1, selectAtr2]);
console.log(selectTag);






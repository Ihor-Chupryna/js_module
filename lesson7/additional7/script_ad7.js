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
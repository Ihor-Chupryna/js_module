// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const user = document.forms.userForm;
const userAddress = document.forms.userAddressForm;
const userButton = document.getElementById('createUserObj');
userButton.onclick = function () {
    console.log({
        name: user.userName.value, age: user.userAge.value,
        country: userAddress.userCountry, street: userAddress.userStreet.value
    });
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const tableForm = document.forms.tableForm;
tableForm.onsubmit = function (e) {
    e.preventDefault();
    let numberRow = tableForm.tableRow.value;
    let numberColumn = tableForm.tableColumn.value;
    let content = tableForm.content.value;
    for (let i = 1; i <= numberRow; i++ ) {
        let row = document.createElement('tr');
        document.body.appendChild(row);
        for (let i = 1; i <= numberColumn; i++) {
            let column = document.createElement('td');
            column.innerText = content;
            row.appendChild(column);
        }
    }
}

// - Сворити масив не цензцрних слів. Сворити інпут текстового типу.
//  Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням. Перевірку робити при натисканні на кнопку
const censoredWordsArr = ['one', 'two', 'three', 'four', 'five', 'six'];
const checkForm = document.forms.checkWordForm;
checkForm.onsubmit = function (e) {
    e.preventDefault();
    if (censoredWordsArr.find(value => value === checkForm.enterWord.value)) {
        alert('censored!!!')
    }
}

// - Сворити масив не цензцрних слів. Сворити інпут текстового типу. Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить. Перевірку робити при натисканні на кнопку
const checkText = document.forms.checkTextForm;
checkText.onsubmit = function (e) {
    e.preventDefault();
    for (const element of censoredWordsArr ) {
        if (checkText.text.value.includes(element)) {
            alert('censored word in the text!!!')
        }
    }
}


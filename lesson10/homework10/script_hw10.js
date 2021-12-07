// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const getIgText = document.getElementById('text');
const getBtnHide = document.getElementsByClassName('hide_text')[0];
getBtnHide.onclick = function () {
    getIgText.classList.toggle('display_none');
    getIgText.classList.contains('display_none') ? getBtnHide.innerHTML = 'show text' : getBtnHide.innerHTML = 'hide text';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const button = document.getElementsByClassName('click_me')[0];
button.onclick = () => button.classList.add('display_none');


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const getFormAge = document.forms.formAge;
getFormAge.onsubmit = function (ev) {
    ev.preventDefault();
    let age = this.userAge.value;
    if (age < 18) {
        console.log('you are not 18!');
    } else {
        console.log('you are 18 and more');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
const getMenuElen = document.getElementsByClassName('menu')[0];
const getClickElem = document.getElementsByClassName('click_menu')[0];
getClickElem.style.cursor = 'pointer';
getClickElem.onclick = () => getMenuElen.classList.toggle('display_none');

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const arrComments = [
    {
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit"

    },
    {
        "title": "qui est esse",
        "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    }
];
const commentList = document.createElement('div');
commentList.innerHTML = `<span>Comments:`;
document.body.appendChild(commentList);
for (const comment of arrComments) {
    let commentDiv = document.createElement('div');
    commentDiv.innerHTML = comment.body;
    let commentBtn = document.createElement('button');
    commentBtn.innerText = 'Hide Comment';
    commentBtn.onclick = function () {
        commentDiv.classList.toggle('display_none');
        commentDiv.classList.contains('display_none') ? commentBtn.innerHTML = 'Show Comment' : commentBtn.innerHTML = 'Hide Comment';
    }
    commentList.append(commentDiv, commentBtn);
}


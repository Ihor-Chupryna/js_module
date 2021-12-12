// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
const postsTitle = document.createElement('h2');
postsTitle.innerText = 'Posts';
const postsDiv = document.createElement(`div`);
postsDiv.classList.add('main');
document.body.append(postsTitle, postsDiv);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('stylePost');
        postsDiv.append(postDiv);
        postDiv.innerHTML = `<div><span>userId:</span> ${post.userId}</div>
                                 <div><span>id:</span> ${post.id}</div>
                                 <div><span>title:</span> ${post.title}</div>
                                 <div><span>body:</span> ${post.body}</div>`;
    }));

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
const titleComments = document.createElement('h2');
titleComments.innerText = 'Comments';
const commentsDiv = document.createElement('div');
document.body.append(titleComments, commentsDiv);
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((comments) => comments.forEach(comment => {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('styleComment');
        commentsDiv.appendChild(commentDiv);
        commentDiv.innerHTML = `<div><span>postId:</span> ${comment.postId}</div>
                                <div><span>id:</span> ${comment.id}</div>
                                <div><span>name:</span> ${comment.name}</div>
                                <div><span>email:</span> ${comment.email}</div>
                                <div><span>body:</span> ${comment.body}</div>`;
    }));


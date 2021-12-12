// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userStyle');
        document.body.appendChild(userDiv);
        userDiv.innerHTML = `<div><span>name:</span> ${user.name}</div>
                           <div><span>address:</span> city: ${user.address.city}, street: ${user.address.street}, suite: ${user.address.suite}</div>
                           <div><span>company:</span> ${user.company.name}</div>
                           <div><span>email:</span> ${user.email}</div>`;
        let showPostsBtn = document.createElement('button');
        showPostsBtn.innerText = 'show posts';
        userDiv.appendChild(showPostsBtn);
        showPostsBtn.onclick = () => {
            showPostsBtn.hidden = !showPostsBtn.hidden
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((posts) => posts.forEach(post => {
                    if (user.id === post.userId) {
                        let postDiv = document.createElement('div');
                        postDiv.innerHTML = post.title + ' ';
                        userDiv.appendChild(postDiv);
                        let showCommentsBtn = document.createElement('button');
                        showCommentsBtn.innerText = 'show comments';
                        postDiv.appendChild(showCommentsBtn);
                        showCommentsBtn.onclick = () => {
                            showCommentsBtn.hidden = !showCommentsBtn.hidden;
                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then((response) => response.json())
                                .then((comments) => comments.forEach(comment => {
                                    if (post.id === comment.postId) {
                                        let commentDiv = document.createElement('div');
                                        commentDiv.innerHTML = '- ' + comment.name;
                                        commentDiv.classList.add('commentStyle');
                                        postDiv.appendChild(commentDiv);
                                    }
                                }))
                        }
                    }
                }))
        }
    }));

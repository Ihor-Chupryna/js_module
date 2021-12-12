// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//  зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
const titlePosts = document.createElement('h1');
titlePosts.innerText = 'Posts:';
document.body.appendChild(titlePosts);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => posts.forEach(post => {
        let postDiv = document.createElement('div');
        document.body.appendChild(postDiv);
        postDiv.innerHTML = `<h2>${post.title}</h2>`;
        let showComment = document.createElement('button');
        showComment.innerText = 'show comments';
        postDiv.appendChild(showComment);
        showComment.onclick = () => {
            showComment.hidden = !showComment.hidden
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((response) => response.json())
                .then((comments) => comments.forEach(comment => {
                    if (post.id === comment.postId) {
                        let commentDiv = document.createElement('div');
                        commentDiv.innerHTML = ` - ${comment.name}`;
                        postDiv.appendChild(commentDiv);
                    }
                }))
        }
    }));

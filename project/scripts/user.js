const user = JSON.parse(localStorage.getItem('user'));
const userDetailsDiv = document.createElement('div');
userDetailsDiv.classList.add('details-style');
document.body.appendChild(userDetailsDiv);
for (const key in user) {
    const userItem = document.createElement('div');
    userDetailsDiv.appendChild(userItem);
    userItem.innerHTML = `<span>${key}</span>: ${user[key]}`;
}
const userPostsBtn = document.createElement('button');
userPostsBtn.innerText = 'post of current user';
userPostsBtn.classList.add('posts-button');
const postsDiv = document.createElement('div');
postsDiv.classList.add('wrapper');
document.body.append(userPostsBtn, postsDiv);
userPostsBtn.onclick = () => {
    userPostsBtn.hidden = !userPostsBtn.hidden;
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
        .then((response) => response.json())
        .then((posts) => posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-style');
            postDiv.innerHTML = post.title;
            postsDiv.appendChild(postDiv);
            const postDetailsBtn = document.createElement('button');
            postDetailsBtn.classList.add('post-button');
            postDetailsBtn.innerText = 'post details';
            postDiv.appendChild(postDetailsBtn);
            postDetailsBtn.onclick = () => {
                document.location.href = 'post-details.html?data=' + JSON.stringify(post);
            }
        }));
}

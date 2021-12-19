const url = new URL(location.href);
const postStr = url.searchParams.get('data');
const post = JSON.parse(postStr);
const postDetailsDiv = document.createElement('div');
postDetailsDiv.classList.add('details-style');
document.body.appendChild(postDetailsDiv);
for (const key in post) {
    const postItem = document.createElement('div');
    postDetailsDiv.appendChild(postItem);
    postItem.innerHTML = `<span>${key}</span>: ${post[key]}`;
}
const commentsTitle = document.createElement('h4');
commentsTitle.innerHTML = 'Comments:';
const commentsDiv = document.createElement('div');
commentsDiv.classList.add('wrapper');
document.body.append(commentsTitle, commentsDiv);
fetch('https://jsonplaceholder.typicode.com/posts/'+ post.id +'/comments')
  .then((response) => response.json())
  .then((comments) => comments.forEach(comment => {
       const commentDiv = document.createElement('div');
       commentDiv.innerHTML = comment.name;
       commentDiv.classList.add('comment-style');
       commentsDiv.appendChild(commentDiv);
  }));

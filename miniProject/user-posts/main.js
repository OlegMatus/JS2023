const postId = new URL(location.href).searchParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const infoContainer = document.getElementsByClassName('user-info-container')[0];
        const postList = document.createElement('ul');
        postList.classList.add('post-list')
        for (const key in post) {
            const liList = document.createElement('li');
            liList.innerText = `${key}: ${post[key]}`;
            postList.appendChild(liList)
        }
        infoContainer.appendChild(postList)
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        const containerComments = document.getElementsByClassName('comments-container')[0];
        for (const comment of comments) {
            const commentList = document.createElement('ul');
            commentList.classList.add('comment-list')
            for (const key in comment) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${key}: ${comment[key]}`;
                commentList.appendChild(listItem);
            }
            containerComments.appendChild(commentList);
        }
    })

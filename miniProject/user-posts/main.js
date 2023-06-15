const postId = new URL(location.href).searchParams.get('postId');
// console.log(postId)
// fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const infoContainer = document.getElementsByClassName('user-info-container')[0];
        function createPostList(post) {
            const list = document.createElement('ul');
            list.innerHTML = `<li>ID: ${post.id}</li>
                    <li>Title: ${post.title}</li>
                    <li>Body: ${post.body}</li>`;
            return list;
        }
        const creatList = createPostList(post);
        infoContainer.appendChild(creatList)

    })
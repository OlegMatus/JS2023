const postId = new URL(location.href).searchParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts/${postId}`)
    .then(response = response.json())
    .then((post) => {
        const infoContainer = document.getElementsByClassName('user-info-container')[0];
infoContainer.innerText = `ID:${post.id} TITLE:${post.title} BODY:${post.body}`

    })
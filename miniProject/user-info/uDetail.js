const url = new URL(location.href);
console.log(url);
const userId = url.searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        console.log(user)
        const box = document.getElementsByClassName('info-container')[0];
        const ul = document.createElement('ul');
        recursiveBuild(user, ul);
        box.appendChild(ul);
    });

function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);

}

function ulBuilder(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul)
}

function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }
}

const postButton = document.getElementById('post-button');
postButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementsByClassName('posts-container')[0];
            for (const post of posts) {
                const postBlock = document.createElement('div');
                postBlock.classList.add('block-posts');
                postBlock.innerText = `TITLE:${post.title}`;

                const button = document.createElement('a');
                button.classList.add('post-button');
                button.textContent = 'post-detail';
                postBlock.appendChild(button);
                button.href = `../../user-posts/post-details.html/?postId=${post.id}`;

                postContainer.appendChild(postBlock);
            }
        });
})



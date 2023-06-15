// В post-details.html:
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в post-details.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-user-details.html, котра має детальну інфу про поточний пост.
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        const box = document.getElementsByClassName('users-container')[0];
        for (const user of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('block');
            userBlock.innerText = `ID:${user.id} NAME:${user.name}`;

            const button = document.createElement('button');
            button.classList.add('btn')
            button.innerText = 'inform';
            userBlock.appendChild(button);
            box.appendChild(userBlock);

            button.onclick = () => {
                location.href = `../user-info/user-details.html/?userId=${user.id}`;
            }
        }
    })
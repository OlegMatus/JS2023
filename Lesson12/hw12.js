// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

// fetch('http://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name}`;
//             document.body.appendChild(div)
//         }
//     });

// ---------------------------------------------------------------------------------
//     вивести їх id + name списком та додати посилання з href = post-details.html?id=XXX (замість ХХХ - айді юзера)
// fetch('http://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             let ul = document.createElement('ul');
//             let li = document.createElement('li');
//             a.href = `post-details.html/?id=${user.id}`;
//             a.innerText = ' :user id-name';
//             li.innerText = `${user.id} ${user.name}`
//             li.appendChild(a)
//             ul.appendChild(li)
//             div.appendChild(ul)
//             document.body.appendChild(div)
//         }
//     })
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

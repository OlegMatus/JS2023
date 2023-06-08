// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
function addTofavorites(objectID) {

    favorites.push(users[objectID]);

    localStorage.setItem('favorites',JSON.stringify(favorites));

    let addButton = document.getElementById(`addButton${objectID}`);
    addButton.disabled = true;
    addButton.textContent = "Favorite";
}

for (let i = 0; i < users.length; i++) {
   let user = users[i];

   let userBlock = document.createElement('div');
   let addBtn = document.createElement('button');

   addBtn.innerText = 'addFavorite';
   addBtn.id = `addBtn ${i}`;
   addBtn.addEventListener('click', function (){
       addTofavorites(i)
   });

   userBlock.appendChild(addBtn);

   document.body.appendChild(userBlock)
}

// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
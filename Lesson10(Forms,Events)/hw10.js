// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
// let form1 = document.forms['form1'];
// form1.onsubmit = function (e) {
//     e.preventDefault()
//     let object = {
//         name: this.name.value,
//         surname: this.surname.value,
//         age: this.age.value,
//     }
//     let div = document.createElement('div');
//     let jsonStr = JSON.stringify(object);
//     div.innerText = `${jsonStr}`;
//     document.body.appendChild(div)
// }
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
let count = localStorage.getItem('count') || 10;
let block = document.getElementById('number block');
let newCount  = + count + 1;
block.innerText = newCount;
localStorage.setItem('count', newCount)
// window.onload = function (e){
//     e.preventDefault()
//     let block = document.getElementById('number block');
//     let number = JSON.parse(block.innerText);
//     number =+ 1;
//     block.innerText = number.toString()
// }
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
// let form2 = document.forms['form2'];
//     form2.onsubmit = function saveSession(e) {
//     e.preventDefault();
//     const currentDate = new Date();
//     const session = JSON.parse(localStorage.getItem('sessions')) || [];
//     session.push(currentDate);
//     localStorage.setItem('session', JSON.stringify(session))
// }
//
//
// let form3 = document.forms['form3'];
// form3.onsubmit = function renderSession(e){
//     e.preventDefault();
// let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
// let sessionsList = document.getElementById('sessionsList');
// sessions.forEach(function(session) {
//     let sessionItem = document.createElement('div');
//     sessionItem.textContent = session;
//     sessionsList.appendChild(sessionItem);
// });
// }

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
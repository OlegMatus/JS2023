// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
     return a * b;
}
    console.log(x = rectangle(5, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(radius) {
    return  Math.PI * radius ** 2;
}
let s = circle(5);
console.log(s)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(radius, height) {
    const cylinderArea = Math.PI * radius ** 2;
    const cylinderSide = 2 * Math.PI * radius *height;
    return 2 * cylinderArea + cylinderSide;
}
console.log(sCylinder = cylinder(2,6))
// - створити функцію яка приймає масив та виводить кожен його елемент

let drink = [
    { name: 'juice', price: 25, status: 'sold'},
    { name: 'pepsi', price: 29, status: 'unsold'},
    { name: 'fanta', price: 32, status: 'sold'},
    { name: 'cola', price: 29, status: 'unsold'},
    { name: 'sprite', price: 26, status: 'sold'}
];
function block(array) {
    for (let arrayElement of array) {
        console.log(arrayElement)
    }
}
block(drink)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function create_par(text) {
    document.write(`<div>`);
    document.write(`<span style="color: red"><p><i>${text}</i></p></span>`);
    document.write(`</div>`);
}
create_par('Зміни — закон життя. І ті, хто дивиться тільки в минуле чи лише на сьогодення, пропустять майбутнє. Джон Ф. Кеннеді')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function create_ul (text) {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
create_ul('Slava Ukraini')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list (text) {
    document.write(`<ul>`);
    i = 0;
    for (i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
    return i;
}
list('Geroyam Slava')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
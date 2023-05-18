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

function list (text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list('Geroyam Slava', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const array2 = [123321, 'Ukraine', true];
function buildUL (arr) {
document.write(`<ul>`);
    for (const item of arr) {
    document.write(`<li>${item}</li>`);
    }
document.write(`</ul>`);
}
buildUL(array2);

// function
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let obj = [
    {id: 1, name: 'oleg', age :34},
    {id: 2, name: 'andriy', age :19},
    {id: 3, name: 'ivan', age :40},
    {id: 4, name: 'vasyl', age :30},
    {id: 5, name: 'maks', age :25}
];
function arr3(obj1) {
    for (const iter of obj1) {
        document.write(`<div> id: ${iter.id} - name: ${iter.name} - age: ${iter.age}</div>`);
    }
}
arr3(obj)
// - створити функцію яка повертає найменьше число з масиву

const number = [-23, 45, 6, 566, 134];
function small(numb){
    let result = numb[0];
        for (let i = 1; i < numb.length; i++) {
            if (result > numb[i]) {
                result = numb[i];
            }
        }
        return result;
    }
    console.log(small(number));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const number2 = [23, 56, 76, 555, 9];
function sum(arr) {
let result = 0;
    for (const numb of arr) {
    result += numb;
    }
    return result;
}
console.log(sum(number2))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

// function swap1(arr, index1, index2) {
//     const value1 = arr[index1];
//     const value2 = arr[index2];
//     arr[index1] = value2;
//     arr[index2] = value1;
//     return arr
// }
// console.log(swap1([11, 22, 33, 44], 0, 1))
function swap2(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr
}

console.log(swap2([11, 22, 33, 44], 0, 1))
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value;
        }
    }
}
const result = exchange(
    10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD')
console.log(result)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
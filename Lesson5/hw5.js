// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => a * b;
console.log(rectangle(4, 20))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (radius) => {
    result = Math.PI * radius **2;
    return result
}
console.log(circle(22))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) => {
    const cylinderArea = Math.PI * r ** 2;
    const cylinderSide = 2 * Math.PI * r *h;
    return 2 * cylinderArea + cylinderSide;
}
console.log(cylinder(12, 8))
// - створити функцію яка приймає масив та виводить кожен його елемент
drink = [
    { name: 'juice', price: 25, status: 'sold'},
    { name: 'pepsi', price: 29, status: 'unsold'},
    { name: 'fanta', price: 32, status: 'sold'},
    { name: 'cola', price: 29, status: 'unsold'},
    { name: 'sprite', price: 26, status: 'sold'}
];
let arr = (item) => {
    for (const drinkElement of item) {
        console.log(drinkElement)
    }
}
    arr(drink)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let par = (text) => {
    document.write(`<div>`);
    document.write(`<span style="color: red"><p><i>${text}</i></p></span>`);
    document.write(`</div>`)
}
    par('Зміни — закон життя. І ті, хто дивиться тільки в минуле чи лише на сьогодення, пропустять майбутнє. Джон Ф. Кеннеді')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatUL = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
creatUL('Slava Ukraini')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const creatUL2 = (text, count) => {
    document.write(`<ul>`)
    let i = 0;
    while (i<count) {
        i++;
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
creatUL2('Geroyam Slava', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array2 = [24081991, 'Ukraine', true];
let accept = (array) => {
document.write(`<ul>`)
    for (let element of array) {
        document.write(`<li> ${array} </li>`)
    }
document.write(`</ul>`)
}
accept(array2)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let obj = [
    {id: 1, name: 'Oleg', age :34},
    {id: 2, name: 'Andriy', age :19},
    {id: 3, name: 'Ivan', age :40},
    {id: 4, name: 'Vasyl', age :30},
    {id: 5, name: 'Maks', age :25}
];
let accept2 = (arr2) => {
    for (const item of arr2) {
document.write(`<div> id: ${item.id} name: '${item.name}' age: ${item.age} </div>`)
    }
}
accept2(obj)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arg) => {
    let result = 0;
    for (let num of arg) {
        result = result + num;
    }
    return result;
}
console.log(sum([1, 4, 11]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1, index2) => {
    const value2 = arr[index1];
    const value1 = arr[index2];
    arr[index1] = value2;
    arr[index2] = value1;
    return arr
}
console.log(swap([11, 22, 33, 44, 55], 2, 4))

let swap2 = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr
}

console.log(swap2([11, 22, 33, 44, 55], 2, 4))
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const sum of currencyValues) {
        if (sum.currency === exchangeCurrency){
         result = sumUAH / sum.value;
        return result
        }
    }

}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
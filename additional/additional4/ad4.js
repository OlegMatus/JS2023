// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function findMinimum (a, b, c) {
    if (a<=b && a<=c){
        return a
    }else if (b<=a && b<=c) {
        return b
    }else{
        return c
    }
}

console.log(findMinimum(5, 9, 6));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function findMaximum(a, b, c) {
    if (a>=b && a>=c){
        return a
    }else if (b>=a && b>=c){
        return b
    }else {
        return c
    }
}

console.log(findMaximum(6, 2, 11));
// - створити функцію яка повертає найбільше число з масиву
function returnMax (array){
if (array.length === 0){
    return null;
}
let max = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}
let numbers = [33, 45, 19, 555];
console.log(returnMax(numbers));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageNumb (arr) {
    let suma = 0;
    for (let arrElement of arr) {
        suma += arrElement;
    }
    const average = suma / arr.length
    return average
}
const numb = [1,22,33,44];
console.log(averageNumb(numb));
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function numbMinMax(...numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let numb of numbers) {
        if (numb < min){
            min = numb;
        }
        if (numb > max){
            max = numb
        }
    }
    console.log(max)
    return min
}

console.log(numbMinMax(4, 7, 10, 15, 9));

// - створити функцію яка заповнює масив рандомними числами
function fillNumbs (size){
    let arr = [];
    for (let i = 0; i < size; i++) {
        const randomNumbs = Math.round(Math.random() * 100);
        arr.push(randomNumbs)
    }
    return arr
}

console.log(fillNumbs(10));
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function fillRandomNumb(limit){
    let arr = [];
    for (let i = 0; i < limit; i++) {
       const randomNumbs = Math.floor(Math.random() * (limit + 1))
arr.push(randomNumbs)
    }
    return arr;
}

console.log(fillRandomNumb(10));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
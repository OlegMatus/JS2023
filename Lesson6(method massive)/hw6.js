// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
// 'lorem ipsum'; 'javascript is cool';
let lengthHW = string1.length;
let lengthLI = string2.length;
let lengthJS = string3.length;
console.log(lengthHW);
console.log(lengthLI);
console.log(lengthJS);
// // - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringHW = 'hello world';
let stringLI = 'lorem ipsum';
let stringJs = 'javascript is cool';
let upperCase1 = stringHW.toUpperCase();
let upperCase2 = stringLI.toUpperCase();
let upperCase3 = stringJs.toUpperCase();
console.log(upperCase1)
console.log(upperCase2)
console.log(upperCase3)
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCase1 = upperCase1.toLowerCase();
let lowerCase2 = upperCase2.toLowerCase();
let lowerCase3 = upperCase3.toLowerCase()
console.log(lowerCase1)
console.log(lowerCase2)
console.log(lowerCase3)
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let clear = str.split(' ');
console.log(clear)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = 'Ревуть воли як ясла повні';
let arr = string.split(' ');
console.log(arr)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let str2 = numbers.map(String);
console.log(str2)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(direction) {
    if(direction === 'ascending'){
        nums.sort((a, b) =>{
            return a-b
        });
    }else{
        nums.sort((a, b) => {
            return b-a
        });
    }
}
sortNums('ascending');
console.log(nums);
sortNums('descending');
console.log(nums)
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
});
console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let filtered = coursesAndDurationArray.filter(course => course.monthDuration >5);
console.log(filtered)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
let element = coursesAndDurationArray.map((course,index) => {
    return {id: index +1, title: course.title, monthDuration: course.monthDuration}
})
console.log(element)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
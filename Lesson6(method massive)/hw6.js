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
['hello world', 'lorem ipsum', 'javascript is cool'].map((item) => console.log(item.length));

// // - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let stringHW = 'hello world';
let stringLI = 'lorem ipsum';
let stringJs = 'javascript is cool';
let upperCase1 = stringHW.toUpperCase();
let upperCase2 = stringLI.toUpperCase();
let upperCase3 = stringJs.toUpperCase();
console.log(upperCase1);
console.log(upperCase2);
console.log(upperCase3)
const arrai = ['hello world', 'lorem ipsum', 'javascript is cool'].map((item) => item.toUpperCase());
console.log(arrai);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCase1 = upperCase1.toLowerCase();
let lowerCase2 = upperCase2.toLowerCase();
let lowerCase3 = upperCase3.toLowerCase()
console.log(lowerCase1);
console.log(lowerCase2);
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
//     const cardSuits = ["Піки", "Трефи", "Бубни", "Черви"];
//     const value = ['6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'];
//     const color = ['black', 'red'];
// function creatDeck () {
//     const deck = [];
//     for (let i = 0; i < cardSuits.length; i++) {
//         for (let j = 0; j < value.length; j++) {
//             for (let k = 0; k < color.length; k++) {
//                 const card = cardSuits[i] + " " + value[j] + " " + color[k];
//                 deck.push(card);
//             }
//         }
//         return deck;
//     }
// }
// const deck = creatDeck();
// console.log(deck)
// ---------------------------------------------------------------------
let cards = [
    { cardSuit: 'spades', value: '6', color: 'black' },
    { cardSuit: 'diamonds', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'hearts', value: '6', color: 'red' },
    { cardSuit: 'spades', value: '7', color: 'black' },
    { cardSuit: 'diamonds', value: '7', color: 'red' },
    { cardSuit: 'hearts', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spades', value: '8', color: 'black' },
    { cardSuit: 'diamonds', value: '8', color: 'red' },
    { cardSuit: 'hearts', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spades', value: '9', color: 'black' },
    { cardSuit: 'diamonds', value: '9', color: 'red' },
    { cardSuit: 'hearts', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spades', value: '10', color: 'black' },
    { cardSuit: 'diamonds', value: '10', color: 'red' },
    { cardSuit: 'hearts', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spades', value: 'jack', color: 'black' },
    { cardSuit: 'diamonds', value: 'jack', color: 'red' },
    { cardSuit: 'hearts', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spades', value: 'queen', color: 'black' },
    { cardSuit: 'diamonds', value: 'queen', color: 'red' },
    { cardSuit: 'hearts', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spades', value: 'king', color: 'black' },
    { cardSuit: 'diamonds', value: 'king', color: 'red' },
    { cardSuit: 'hearts', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spades', value: 'ace', color: 'black' },
    { cardSuit: 'diamonds', value: 'ace', color: 'red' },
    { cardSuit: 'hearts', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз

const card1 = cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(card1)
// - всі шістки
const card2 = cards.filter((card) => card.value === '6');
console.log(card2)
// - всі червоні карти
const card3 = cards.filter((card) => card.color === 'red');
console.log(card3)
// - всі буби
const card4 = cards.filter((card) => card.cardSuit === 'diamond');
console.log(card4)
// - всі трефи від 9 та більше
const card5 = cards.filter((card) => ['9','10','jack','queen','king','ace'].includes(card.value) && card.cardSuit === 'clubs');
console.log(card5)

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

// const array = cards.reduce((acc, cr) => {
//     switch (cr.cardSuit) {
//         case 'spade':
//             acc.spade.push(cr);
//             break
//         case 'diamond':
//             acc.diamond.push(cr);
//             break
//         case 'heart':
//             acc.heart.push(cr);
//             break
//         case 'clubs':
//             acc.clubs.push(cr);
//             break
//     }
//     return acc;
// },{spade:[], diamond:[], heart:[], clubs:[]} );
// console.log(array)
// =========================
const array2 = cards.reduce((acc, cr) => {
    acc[cr.cardSuit].push(cr);
    return acc;
},{spades:[], diamonds:[], hearts:[], clubs:[]} );
console.log(array2)
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const array3 = coursesArray.filter((cours) => cours.modules.includes('sass'));
console.log(array3)
// --написати пошук всіх об'єктів, в який в modules є docker
const array4 = coursesArray.filter((cours) => cours.modules.includes('docker'));
console.log(array4)

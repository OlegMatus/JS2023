// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('насолода',3)) // [нас,лаж,ден,ие]
function cutString(str, n) {
    const result = [];

    for (let i = 0; i < str.length; i += n) {
        result.push(str.substring(i, i + n));
    }

    return result;
}

console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// let str = 'Каждый охотник желает знать';
// str = str.substring()

// document.writeln(delete_characters(str, 7)); // Каждый

function delete_characters(str, length) {
    str = str.substring(0, length);
    return str
}
let str1 = 'Каждый охотник желает знать';
console.log(delete_characters(str1, 7));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

function insert_dash(str) {
    str = str.toUpperCase().split(' ');
    return str.join('-')
}
let str2 = "html javascript PHP";
console.log(insert_dash(str2));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function transforms(str) {
 str = str.charAt(0).toUpperCase() + str.slice(1);
 return str
}
console.log(transforms(str2))
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

const normalizeName = (name) => {
  return name.replace(/[\W_]+/g, ' ')
}
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

console.log(normalizeName(n1));
console.log(normalizeName(n2));
console.log(normalizeName(n3));
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function generation(length) {
    const numbers = [];
    for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 101);
    numbers.push(randomNumber);
    }
    return numbers
}
const numbersLenght = 15;
console.log(generation(numbersLenght))
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
function generation2(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        const rundomNumb = Math.floor(Math.random() * 91);
        array.push(rundomNumb)
        }
    return array;
    }
let numbLenght2 = 15;
console.log(generation2(numbLenght2).sort((a,b) => {return a-b}))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
function generation3(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const rundomNumb = Math.floor(Math.random() * 91);
        randomArray.push(rundomNumb)
    }
    return randomArray;
}
    function filterNumbers(array) {
        return array.filter((number) => {return number!== 0 && number% 2 === 0});
    }
//         return array.filter(function (number) {
//             return number !== 0 && number % 2 === 0;
//         });
//
// }
 let randomArray = generation3(10, 0, 100);
 let filteredArray = filterNumbers(randomArray);
console.log(randomArray)
console.log(filteredArray)
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню

// --створити масив з:
//     - з 5 числових значень
let number = [22,33,333,67798,7887];
console.log(number)
// // - з 5 стічкових значень
let tape = ['asd','qwee','arr','bbc','news'];
console.log(tape)
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
let group = [22,33,333,67798,7887,'asd','qwee','arr','bbc','news',true,false,null,undefined,NaN];
console.log(group)
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let massiv = [];
   massiv[0] = 'apple';
   massiv[1] = 'orange';
   massiv[2] = 'bananas';
   massiv[3] = 'lemon';
   massiv[4] = 'peach';
   massiv[5] = 123321;
console.log(massiv)
/// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length) {
   let user = arr[i];
   i++;
   console.log(user);
}
console.log(' ')
// //     2. перебрати його циклом for
let brr = [2,17,13,6,22,31,45,66,100,-18];
for (let j = 0; j < brr.length; j++) {
   const Element = brr[j];
   console.log(Element)
}
console.log(' ')
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let doitem = [2,17,13,6,22,31,45,66,100,-18];
let n = 0;
while (n<doitem.length) {
   const items = doitem[n];
   if (n % 2) {
      console.log(items)
   }
   n++
}
console.log(' ')
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let item = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < item.length; i++) {
   const itemElement = item[i];
   if (i % 2) {
      console.log(itemElement)
   }
}
console.log(' ')
// -----------------------reverse 4-----------------------

let itemR = [2,17,13,6,22,31,45,66,100,-18];
for (let i = itemR.length - 1; i >= 0; i--) {
   console.log(itemR[i]);
}
   for (let i = 0; i < itemR.length; i++) {
      const itemElement = item[i];
      if (i % 2) {
         console.log(itemElement)
      }
   }
console.log('--- ')

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let item2 = [2,17,13,6,22,31,45,66,100,-18];
let j = 0;
while (j<item2.length) {
   const even = item2[j];
   if (j % 2 === 0) {
   console.log(even)
   }
   j++;
}
console.log(' ')
// 6. перебрати циклом for та вивести  числа тільки парні  значення
let item3 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < item3.length; i++) {
   const itemElement = item3[i];
   if (i % 2 === 0) {
      console.log(itemElement)
   }
}
// 7. замінити кожне число кратне 3 на слово "okten"
let item4 = [2,17,13,6,22,31,45,66,100,-18];
let result = [];
for (let i = 0; i < item4.length; i++) {
   if (i % 3 === 0) {
      result.push("okten");
   }else {
      result.push(item4[i])
   }
}
console.log(result)

// 8. вивести масив в зворотньому порядку.
let item5 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = item5.length - 1; i >= 0; i--) {
   console.log(item5[i]);
}
console.log(`----------------------`)
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const block1 = [3,5,66,44,32,98,63,55,9,12];
for (const number1 of block1) {
   console.log(number1)
}
console.log(`----------------------`)
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const block2 = ['one','two','three','four','five','six','seven','eight','nine','ten'];
for (const string of block2) {
   console.log(string)
}
console.log(`----------------------`)
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let block4 = [23,'twenty three', 55,'fifty five',false,99,'ninety nine',true,'one hundred',false];
for (let k = 0; k < block4.length; k++) {
   if (typeof block4[k] === "boolean") {
      console.log(block4[k]);
   }
}
console.log(`----------------------`)
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let block5 = [23,'twenty three', 55,'fifty five',false,99,'ninety nine',true,'one hundred',false];
for (let k = 0; k < block5.length; k++) {
   if (typeof block5[k] === "number") {
      console.log(block5[k])
   }
}
console.log(`----------------------`)
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let block6 = [23,'twenty three', 55,'fifty five',false,99,'ninety nine',true,'one hundred',false];
for (let k = 0; k < block6.length; k++) {
   if (typeof block6[k] === "string") {
      console.log(block6[k])
   }
}
console.log(`----------------------`)
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let myArray = [];
myArray [0] = 11;
myArray [1] = 'Hello';
myArray [2] = true;
myArray [3] = null;
myArray [4] = [123, 321, 111];
myArray [5] = undefined
myArray [6] = {name: 'John', age: 28};
myArray [7] = NaN;
myArray [8] = 34;
myArray [9] = false;
for (let k = 0; k < 10; k++) {
   console.log(myArray[k]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let k = 0; k <= 10; k++) {
   console.log('Поточний крок:',k);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k <= 100; k++) {
   console.log('Поточний крок:',k);
   document.write(`Поточний крок: ${k} <br>`)
}
document.write(`<hr>`)
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k <= 100; k+=2) {
   console.log('Поточний крок:',k);
   document.write(`Поточний крок: ` +k+ `<br>`)
}
document.write(`<hr>`)
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k = 0; k <= 100; k++) {
   if (k % 2 ===0){
      console.log('парні', k);
      document.write(`парні ${k} <br>`)
   }
}
document.write(`<hr>`)
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 0; k <= 100; k++) {
   if (k % 3 ===0){
      console.log('непарні', k);
      document.write(`непарні ` +k+ `<br>`)
   }
}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
let books = [
   {title: 'Сліди на дорозі', pages: 375, author: 'Валерій Маркус', genre: 'сучасна проза'},
   {title: 'Кобзар', pages: 416, author: 'Тарас Шевченко', genre: 'українська класика'},
   {title: 'Розум убивці', pages: 400, author: 'Майк Омер', genre: 'детектив'},
   {title: 'Я,Паштєт і армія', pages: 224, author: 'Кузьма Скрябін', genre: 'українська література'},
   {title: 'Інтернат', pages: 336, author: 'Сергій Жадан', genre: 'сучасна проза'}
];
let maxBook = books[0];
for (let k = 0; k < books.length; k++) {
 if (books[k].pages > maxBook.pages){
    maxBook = books[k]
 }
}
console.log(maxBook)
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
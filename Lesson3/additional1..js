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

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

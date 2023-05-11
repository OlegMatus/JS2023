// --створити масив з:
//     - з 5 числових значень
let number = [22,33,333,67798,7887];
console.log(number)
// - з 5 стічкових значень
let tape = ['asd','qwee','arr','bbc','news'];
console.log(tape)
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
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
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//    let user = arr[i];
//    console.log(user);
//    i++;
// }
// //     2. перебрати його циклом for
// let brr = [2,17,13,6,22,31,45,66,100,-18];
// for (let j = 0; j < brr.length; j++) {
//    const Element = brr[j];
//    console.log(Element)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let doitem = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i<doitem.length) {
   const items = doitem[i];
   i++;
      console.log(items)
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let item = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < item.length; i++) {
   const itemElement = item[i];
   if (i%2)
   console.log(itemElement)
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
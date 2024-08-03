//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let result = fruts.map((item) => item.name);
// console.log(result); // (4) ['Apple', 'Tomat', 'Cherry', 'Orange']

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let a = 2; a < 10; a++) {
//   if (a % 2 !== 0) continue;
//   console.log(a); // 2,4,6,8
// }

//  -- 3 --
// Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`цифра ${i}!`);
// }
// or
// let i = 0;
// do {
//   console.log(`цифра ${i}!`);
//   i++;
// } while (i < 5);

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let value = +prompt("Введіть число більше за 100");
//   if (!value) break;
//   else if (value <= 100) {
//     console.log("Введене число має бути більше за 100!");
//     continue;
//   } else if (value > 100) {
//     console.log("Усе вірно!");
//     break;
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// let result = girls.map((item) => item.age);
// console.log(result);
// let sum = result.reduce((sum, item) => sum + item) / result.length;
// console.log(`${sum} років`); // 20.5

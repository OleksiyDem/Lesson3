// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log("Block", b);
// }
// console.log("Global", b); // ReferenceError: b is not defined

// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while

// let a = 0;
// while (a < 5) {
//   a++; // теж саме що a=a+1
//   console.log("a", a);
// }

// let a = 3;
// while (a) console.log("a", a--); // a-1 до 0

// do while  // виконується до поки діє умова

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 5);

//for

// let a = 0;
// for (let a = 0; a < 3; a++) {
//   // нач значення; умова; дія

//   console.log(a);
// }
// або так:
// let a = 0;
// for (; a < 3; a++) {
//   console.log(a);
// }

// break && continue

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число"); // +prompt будет пытаться привести значение к числу, аналогично Number(prompt).
//   if (!value) break; // коли нажимаємо скасувати (false)
//   summ += value; // додати value до summ
// }

// console.log("Summ", summ);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue; // виводимо непарні числа (зупиняє поточну ітерацію і починає виконання циклу спочатку з
// наступної ітерації)
//   console.log(i); // 1, 3, 5, 7, 9
// }

// --------------------------//
// --------------------------//
// масиви
// --------------------------//
// --------------------------//

// let arr = ["Apple", "Orange", "Plum"]; // 0 , 1, 2

// console.log(arr[2]); // Plum

// arr[2] = "Lemon"; //
// console.log(arr[2]); // Lemon - замінює елемент

// arr[3] = "Cherry";
// console.log(arr); // ["Apple", "Orange", "Lemon", "Cherry"]

// console.log(arr.length); // 4 - довжина масиву

// arr2 = [1, "hello", { key: "" }]; // у масиві можуть бути різні типи даних

// --------------------------//
// let arr = ["Apple", "Orange", "Plum"];

// arr[2] = "Lemon";

// arr[3] = "Cherry";

// console.log(arr);

// arr.push("Tomato"); // добавляє у кінець масиву

// console.log(arr); //'Apple', 'Orange', 'Lemon', 'Cherry', 'Tomato'

// arr.pop(); // видаляє елемент із кінця масиву

// console.log(arr); //'Apple', 'Orange', 'Lemon', 'Cherry'

// arr.shift(); // видаляє елемент з початку масиву

// console.log(arr); //'Orange', 'Lemon', 'Cherry'

// arr.unshift("Tomato"); // додає елемент у початок масиву

// console.log(arr); //'Tomato', 'Orange', 'Lemon', 'Cherry'
// --------------------------//

// перебираємо масив (старий метод)

// let arr = ["Apple", "Orange", "Plum"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); // Apple Orange Plum
// }

// // перебираємо масив (новий метод) for of

// for (let item of arr) {
//   console.log(item);
// }

// // for in (звертається до індексу)

// for (let key in arr) {
//   console.log(arr[key]);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][0]); // 4 (1-й масив 0-й елемент)

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// let a = 5;
// let b = a;

// a = 10;

// console.log(a); //10
// console.log(b); //5

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr); // (4) [1, 2, 3, 4]
// console.log(arr2); //(4) [1, 2, 3, 4]

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// let arr = ["a", "b", "c", "d", "f"];

// arr.splice(2, 1); // видалити (з якого індексу, скільки елементів(може бути 0))
// console.log(arr); // (4) ['a', 'b', 'd', 'f']

// arr.splice(1, 1, "Let's", "dance"); // 1, 1, - видаляє, "Let's", "dance" - вставляє
// console.log(arr); // ['a', "Let's", 'dance', 'c', 'd', 'f']

// console.log(arr.slice(1, 3)); //arr.slice(begin, end. - Копіює елементи від begin до, але не включаючи, end(якщо не вказати - до кінця).

// let a = [1, 2, 3];

// console.log(arr.concat(a, "test")); // Метод arr.concat створює новий масив, в який копіює дані з інших масивів та
// додаткові значення. (9) ['a', 'b', 'c', 'd', 'f', 1, 2, 3, 'test']

// console.log(arr.indexOf("c", 1)); // 2 (item, from(не обов'язково))
// console.log(arr.lastIndexOf("c", 1)); // -1 (не знайдено) – те ж саме, але шукає справа наліво.
// console.log(arr.includes("c")); // true

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomato" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// console.log(fruits.find((item) => (item.id = 1))); // id: 1, name: 'Tomat'
// console.log(fruits.filter((item) => item.id < 2)); //{id: 0, name: 'Apple'} {id: 1, name: 'Tomat'}

// map

// let result = fruits.map((item) => item.name.length);
// console.log(result); // (4) [5, 6, 6, 6]

// split

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", "); // створює масив, розділяє за ", "

// console.log(arr); // ['Оля', 'Юля', 'Аня', 'Петя']

// join - створює строку з масиву

// let newString = arr.join(" + ");

// console.log(newString); //Оля + Юля + Аня + Петя

// reduce -  використовуються для обчислення якогось одного значення на основі всього масиву.

// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((sum, item) => sum + item); // визначити суму чисел

// console.log(red); // 15

// let arr = [23, 45, 30];
// let sum = arr.reduce((sum, item) => sum + item) / arr.length; // середня сума чисел
// console.log(sum);

// let a = 0;
// while (a < 5) {
//     console.log("a = ", a);
//     a++
// }

// let a = 5;
// while (a) console.log(a--);

// let a = 0;

// do {
//     console.log(a++)
// } while (a < 10);

// for (let a = 0; a < 5; a++) {
//     console.log(a);
// }

// let value = prompt("Enter the number", "");
// alert(value);
// console.log(typeof value);

// let summ = 0;
// while (true) {
//     let value = +prompt("Enter number");
//     if (!value) break;
//     summ += value;
// }
// console.log(summ);

//Зробіть сервіс який отримує тризначне число

//Поверніть користувачу сумму цих чисел

// let month = prompt("Enter the number");
// month = Number(month);

// // let a = parseInt(month / 100);
// // // console.log(a);

// // let b = parseInt((month - a * 100) / 10);
// // // console.log(b);

// // let c = month - a * 100 - b * 10;
// // // console.log(c);
// // let d = a + b + c;

// let a = month % 100;
// let b =

// console.log('Sum of digits is ');
// console.log(d);

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
//     document.write(i);
// }

// let arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.pop();

    // document.write(arr.length);

// for (let item of arr) {
//     console.log(item);
// }

// arr.splice(2, 1);


// let arr2 = [11, 12, 13];
// console.log(arr.concat(arr2));

// console.log(arr.indexOf(4, 5));

// let cars = "Volvo, Mers, Toyota";
// let arr = cars.split(", ");
// let a = arr.join(", ");

// console.log(a);

let arr = [1, 2, 3, 4, 5];

let a = arr.reduce((summ, item) => summ + item);
console.log(a);
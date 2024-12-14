// function hello(a) {
//     if (a <= 0) {
//         return 0
//     }
//     return a % 2 == 0 ? (a - 1) + hello(a - 3) : a + hello(a - 2)
// }
// console.log(hello(5));


// function hello(a) {
//     let cnt = 0
//     return (a) => {
//         if (a > cnt) {
//             cnt = a
//         }
//         return cnt
//     }
// }
// let sum = hello()
// console.log(sum(10));
// console.log(sum(20));
// console.log(sum(10));



// function hello(a) {
//     if (a <= 0) {
//         return 0
//     }
//     return a % 10 + hello(Math.floor(a / 10))
// }
// console.log(hello(1101));



// function hello(a = 0) {
//     return (b) => {
//         return a = a + b
//     }
// }
// let sum = hello()
// console.log(sum(3));
// console.log(sum(5));


// function hello(a = 0, cnt = 1) {
//     return (b) => {
//         return a = (a + b) / cnt++
//     }
// }
// let sum = hello()
// console.log(sum(10));
// console.log(sum(15));


// function hello(a, b) {
//     let c = a;
//     return function () {
//         let sum = c;
//         c += b;
//         return sum;
//     };
// }
// let hello = hello(0, 2);
// console.log(hello());
// console.log(hello());
// console.log(hello());
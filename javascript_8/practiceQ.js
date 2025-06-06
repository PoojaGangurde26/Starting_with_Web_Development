//Q check if all number in our array are multiple of 10 or not
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [5, 10, 15, 20, 25, 20];
// let muloften = arr.every((el) => {
//     return el % 10 == 0;
// })
// console.log(muloften);

//create a function to find a min in array
// let arr = [3, 2, 4, 5, 6];
// function getmin(arr) {
//     let min = arr.reduce((min, el) => {
//         if (min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     })
//     return min;
// }
// console.log(getmin(arr));




//Defaulit Parameter

// function sum(a, b = 3) {
//     return a + b;
// }
// console.log(sum(2));


// //Spread

// let arr=[1,2,3,4,5,,6];
// undefined

// arr
// (7) [1, 2, 3, 4, 5, empty, 6]



// console.log(..."pooja");


//Sread on array literals

// let arr = [1, 2, 3, 4, 5];
// let newarr = [...arr];
// console.log(newarr);


// let even = [2, 4, 6, 8];
// let odd = [1, 3, 5, 7];
// let arr = [...even, ...odd];
// console.log(arr);



//spread on a Object literals

const data = {
    email: "poojagangurde406@gmail.com",
    password: "pooja@123"
};
let datacopy = { ...data, id: 123 };

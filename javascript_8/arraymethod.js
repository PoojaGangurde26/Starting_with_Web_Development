//1)forEach()

// let arr = [1, 2, 3, 4, 5];
// let print = function (el) {
//     console.log(el);
// }
// arr.forEach(print);

//or
// arr.forEach(function (el) {
//     console.log(el);
// })

//using arraow function
// arr.forEach((el) => {
//     console.log(el);

// })


//for object

// let arr1 = [{
//     name: "ppja",
//     marks: 22,
// }, {
//     name: "www",
//     marks: 77,
// }];

// arr1.forEach((student) => {
//     console.log(student.marks);
//     console.log(student.name);
// })



//2) Map()

// let arr1 = [1, 2, 3, 4];
// let double = arr1.map(function (el) {
//     return el * 2;
// });
// console.log(arr1);
// console.log(double);

// let students = [{
//     name: "ppja",
//     marks: 22,
// }, {
//     name: "www",
//     marks: 77,
// }];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// })
// console.log(gpa);



//3) filter()

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = arr.filter((el) => {
//     return el % 2 == 0;
// })
// console.log(even);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let odd = arr.filter((el) => {
//     return el % 2 != 0;
// })
// console.log(odd);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = arr.filter((el) => {
//     return el < 5;
// })
// console.log(even);



//4) every()

// [1, 2, 3, 4].every((el) => {
//     return el % 2 == 0;
// })

// [1, 2, 3, 4].every((el) => {
//     return el % 2 == 0;
// })
// false
// [4,2, 4].every((el) => {
//     return el % 2 == 0;
// })
// true


//5)some()

// [1,2,3,4,5].some((el)=>(el%2==0));
// true
// [1,3,5].some((el)=>(el%2==0));
// false



//6)reduce()

// let num = [1, 2, 3, 4, 5];
// let fn = num.reduce((res, el) => {
//     console.log(res);
//     return (res + el)
// });
// console.log(fn);

//finad maximum element in the array using reduce

let num = [1, 2, 3, 4, 5, 6];
let max = num.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
})
console.log(max);

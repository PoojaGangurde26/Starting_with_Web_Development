//write a function called doubledAndReturnArg which accept an array and a variable number of an arguments
//the function should return a new array with the original array value and all of the additional arguments doubled.

const doubledAndReturnArg = (arr, ...arg) => [
    ...arr,
    ...arg.map((v) => v * 2),
];
console.log(doubledAndReturnArg([1, 2, 3, 4], 5, 5));

//Square and sum the array elements using the arrow function then find the avg of the array

let arr = [2, 3, 4, 5];
let square = arr.map((arr) => arr * arr);
console.log(square);

let sum = square.reduce((add, el) => {
    return add + el;
})
console.log(sum);

let avg = sum / arr.length;
console.log(avg);
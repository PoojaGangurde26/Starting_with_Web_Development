//write a arrow function names arrayAvarage that accept an array of number an return the avarage of those numbers
let arrayAvarage = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
let arr = [1, 2, 3, 4, 5];
console.log(arrayAvarage(arr));
//write a js function to generate a random number within a range





// function getRandom() {
//     let num = Math.floor(Math.random() * 100) + 1;
//     console.log(num);
// }
// getRandom();


let start = 100;
let end = 200;
function generateRandomNo(start, end) {
    let diff = start - end;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandomNo(start, end));
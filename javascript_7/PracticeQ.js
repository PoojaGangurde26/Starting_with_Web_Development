//write a arrow function that return the square of a number n
// const sq = (n) => {
//     console.log(n * n);
// }


// or
const sq = (n) => (n * n);


//write a function that prints the "Hello World" 5 time of inteval of 2 second
let id = setInterval(() => {
    console.log("Hello worlds");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval run");
}, 10000)
//this Keywords

const student = {
    math: 55,
    physics: 66,
    chemistry: 77,
    getAvg() {
        let avg = (this.math + this.physics + this.chemistry) / 3;
        console.log(avg);
    }


}

//try catch keywords

// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch (e) {
//     console.log("a dose not defined")
// };
// console.log("hello");
// console.log("hello");
// console.log("hello");



//Arrow Functions

// const sum = (a, b) => {
//     console.log(a + b);
// }


//implicit  return 

const mul = (a, b) => (a * b);

//Set TimeOut function
// console.log("hi,there");
// setTimeout(() => {
//     console.log("Apna college");
// }, 4000);
// console.log("Welcome to");


//setInterval

let id = setInterval(() => {
    console.log("Pooja Gangurde");
}, 2000)
console.log(id);
clearInterval(1);
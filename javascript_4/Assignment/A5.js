//print the factorial of the number n

let n = prompt("Enter the number");
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i
}
console.log(`Factorial of ${n} is ${fact}`);
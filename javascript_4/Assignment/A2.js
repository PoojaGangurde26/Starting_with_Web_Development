//write a JS program to find the number of digit in a number
//ex-number=287152 
//count=6

let num = 28715244;
let count = 0;
while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log(count);
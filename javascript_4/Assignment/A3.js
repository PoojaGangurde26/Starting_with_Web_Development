//write a jS program to find a sum of digit in number
//ex num=287152
//sum=25
let num = 287152;
let sum = 0;
while (num > 0) {
    digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log(sum);
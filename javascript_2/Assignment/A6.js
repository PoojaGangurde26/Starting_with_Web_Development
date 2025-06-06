//write a program to check if two number has same last digit or not
let num1 = 222;
let num2 = 342;
let lastdig1 = num1 % 10;
let lastdig2 = num2 % 10;
if (lastdig1 == lastdig2) {
    console.log("its same")
}
else {
    console.log("its not same");
}
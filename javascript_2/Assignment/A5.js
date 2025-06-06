//write a program to find largest of three number

let num1 = 3;
let num2 = 5;
let num3 = 10;
if (num1 > num2 && num2 > num3) {
    console.log(num1, "is gretter than", num2, "and", num3);
} else if (num2 > num3 && num3 > num1) {
    console.log(num2, "is gretter than", num1, "and", num3);

}
else {
    console.log(num3, "is gretter than", num2, "and", num1)
}
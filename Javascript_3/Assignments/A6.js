//Q6) write a javascript program to check if an element exist in an array or not
let arr = [1, 2, 3, 'pooja', 4, , 5];
let n = 3;
// console.log(arr.includes(n));
let item = 4;
if (arr.indexOf(item) != -1) {
    console.log("Element exist in an array");

} else {
    console.log("Element  dosent exist in an array");
}
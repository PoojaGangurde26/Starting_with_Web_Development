//Q2)  write a javascript program to get the last n element of an array.[n can be a any  positive numbers]
//ex- arr=[7,9,0,-2]
//n=3
//o/p =[9,0 ,-2]

let arr = [7, 9, 0, -2];
let n = 3
console.log(arr.slice(arr.length - n));

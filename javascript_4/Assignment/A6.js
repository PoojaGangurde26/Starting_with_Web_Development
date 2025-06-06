//find the largest number in an array with a only positive numbers
let arr = [1, 33, 44, 22, 55, 66, 100];
let largest = 0;
for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);
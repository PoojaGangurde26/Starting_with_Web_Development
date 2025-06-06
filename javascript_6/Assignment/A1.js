// Write a js function that return array element larger than the number

let arr = [1, 2, 3, 5, 6, 7, 8, , 0, 9, 12];
let num = 5;
function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);
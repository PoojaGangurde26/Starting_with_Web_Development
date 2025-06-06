//Create a new array whoose elemnt are in uppercase of words present in the origional array
let arr = ["pooja", "kalyani"];
let upper = arr.map((str) => {
    return str.toUpperCase();
})
console.log(upper);
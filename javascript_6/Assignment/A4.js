//write a js program to count the number of vovel in the string


let str = "apnacollege";

function getvovel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            count++;

        }

    }

    return count;
}
console.log(getvovel(str));
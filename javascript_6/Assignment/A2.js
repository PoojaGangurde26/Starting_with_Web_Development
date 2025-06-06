//write a js function to extract unique character from a string


let str = "abcabcghacbgefgh";
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currchar = str[i];
        if (ans.indexOf(currchar) == -1) {
            ans += currchar;
        }
    }
    return ans;


}
console.log(getUnique(str));
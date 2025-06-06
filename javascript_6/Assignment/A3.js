//write a js function that accept a list of contry name as inpute and return longest contry name as a output


let country = ["Pakistan", "India", "united kingdom"];
function longestname(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let anslen = country[ansIdx].length;
        let currlen = country[i].length;
        if (currlen > anslen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestname(country));
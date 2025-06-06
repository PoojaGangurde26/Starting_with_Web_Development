// a string is a golden string if it is start with A ar aand has total lengthgretter than 5 . for the given string print it is golden or not

let str = "pooja gangurde";
if (str[0] == 'A' || str[0] == 'a' && str.length > 5) {
    console.log("Golden string!");
}
else {
    console.log(" Not a Golden string!");
}

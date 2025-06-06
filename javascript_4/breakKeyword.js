// let i = 1;
// while (i <= 5) {
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
//     i++
// }



let favMov = "stree2";
let guess = prompt("guess fav movie");
while ((guess != favMov)) {
    if (guess == "quite") {
        console.log("ohh uhh quite");
        break;
    }

    guess = prompt(" wrong guess !!, guess again");

}

if (guess == favMov) {
    console.log("Congrats!!");
}
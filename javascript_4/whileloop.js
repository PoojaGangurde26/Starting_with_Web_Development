// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++
// }

//print the number from 0-20
// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }

//write a javascript program to guess fav move

let favMov = "stree2";
let guess = prompt("guess fav movie");
while ((guess != favMov) && (guess != "quit")) {

    guess = prompt(" wrong guess !!, guess again");

}

if (guess == favMov) {
    console.log("Congrats!!");
}


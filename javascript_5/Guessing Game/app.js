// User enter the max number and then tries to guess a random generated number between 1 to max


const max = prompt("Enter the max number");


const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number");
while (true) {
    if (guess == "quite") {
        console.log("Quiting the game");
        break;
    }
    if (guess == random) {
        console.log("Congredulation!! you guess the correct number");
        break;
    }
    else if (guess < random) {
        guess = prompt(" hint:Your guess was too small.please try again")

    } else {
        guess = prompt(" hint:Your guess was too large.please try again")


    }
    // else {
    //     guess = prompt("your guess was wrong. please try again")
    // }


}
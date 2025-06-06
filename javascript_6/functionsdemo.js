function hello() {
    console.log("hello")

}

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}


function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("Adult")
    } else {
        confirm.log("Not adult")
    }
}


//practice Question:-Create a poem
function createpoem() {
    console.log("twinkle,twinkle little start");
    console.log("How are wonder ,what you are");
    console.log("jonny ,jonny yes pappa ")
    console.log("little sure no papaa!!")


}

//generate random number beetween 1to 6
function generateRandomNo() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);

}
// generateRandomNo();
// hello();
// print1to5();
// isAdult();
// createpoem();


//function with arguments
function printname(name, age) {
    // console.log("name=", name, "and age=", age);
    console.log(`${name}'s age is ${age}`);
}
// printname("pooja", 22);


//practice Question:-create a function that gives avg of three numbers

function avarage(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
// avarage(2, 3, 4);

//practice Question:- create a multiplication table

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * n);
    }

}
// table(55);


//sum of number
function sum(a, b) {
    return a + b;
}
// console.log(sum(2, 3));
// console.log(sum(sum(2, 3), 5));

//practiceQ:-create a function that return sum of number from 1 to n


function sum(n) {
    let sm = 0
    for (let i = 1; i <= n; i++) {
        sm = sm + i;
    }
    return sm;
}

// console.log(sum(5));

let arr = ["pooja", "kalyani", "samiksha"];
function concating(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
// console.log(concating(arr));



//Practice Q:Function scope

let greet = "hello";
function changegreet() {
    let greet = "namaste";
    console.log(greet);
    function innergreet() {
        console.log(greet);
    }

}
// console.log(greet);
// changegreet();


//function Arguments

let sum1 = function (a, b) {
    return a + b;
}
// console.log(sum1(2, 3));


///Higher order functions

// function mulgreet(fun, count) {
//     for (let i = 1; i <= count; i++) {
//         fun();
//     }
// }
// let greet1 = function () {
//     console.log("hello");
// }
// console.log(mulgreet(greet1, 6));


//return function

function OddEvenFactory(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);

        }
        return even;
    }
    else {
        console.log("wrong request");
    }
}
let request = "odd";



// request
// 'odd'
// let num=OddEvenFactory(request)
// undefined
// num
// ƒ (n) {
//             console.log(!(n % 2 == 0));
//         }
// num(4);
// functionsdemo.js:146 false
// undefined


//Method
// const calculator = {
//     num: 55,
//     add: function (a, b) {
//         return a + b;

//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     }

// };


const calculator = {
    num: 55,
    add(a, b) {
        return a + b;

    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }

};


// calculator
// {num: 55, add: ƒ, sub: ƒ, mul: ƒ}add: ƒ (a, b)mul: ƒ (a, b)num: 55sub: ƒ (a, b)[[Prototype]]: Object
// calculator.num
// 55
// calculator.add
// ƒ (a, b) {
//         return a + b;

//     }
// calculator.add(2,3)
// 5
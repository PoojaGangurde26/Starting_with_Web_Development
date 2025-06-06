// async function greet() {
//     return "hello";

// }
// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was:", result)
//     })
//     .catch((err) => {
//         console.log("promise was rejected");
//         console.log("Error was:", err);
//     })

//sysn with arrow function
// let demo = async () => {
//     return 5;
// };




//Await Keywords

// function getNumber() {
//     // return 5;
//     // console.log(5);
//     return new Promise((resolve, rejecte) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     })
// }


// async function Demo() {
//     await getNumber();
//     await getNumber();
//     await getNumber();
// }


//new ex-color change

let h1 = document.querySelector('h1');
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            resolve("color changed")
        }, delay)

    });
}

// changeColor("red", 1000).then(() => {
//     console.log("red color was completed");
//     return changeColor("blue", 1000);
// }).then(() => {
//     console.log("blue color was completed");
//     return changeColor("pink", 1000);
// }).then(() => {
//     console.log("pink color is complete");
// })
//     .catch(() => {
//         console.log("color not completed");
//     })

async function Demo() {
    try {

        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("pink", 1000);
    } catch (err) {
        console.log("error cought")
    }

    let a = 10;
    console.log(a);

}
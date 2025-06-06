//callstack
//breakpoints


// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();



//JS in single thread

// setTimeout(() => {
//     console.log("pooja gangurde")

// }, 1000);

// console.log("hello!----")



//callback Hell

let h1 = document.querySelector('h1');


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay)

    });
}
changeColor("red", 1000).then(() => {
    console.log("red color was completed");
    return changeColor("blue", 1000);
}).then(() => {
    console.log("blue color was completed");
    return changeColor("pink", 1000);
}).then(() => {
    console.log("pink color is complete");
})
    .catch(() => {
        console.log("color not completed");
    })





// changecolor("red", 1000, () => {
//     changecolor("orange", 1000, () => {
//         changecolor("yellow", 1000)
//     });
// });




//callback Hell

// function saveDB(data, success, failure) {

//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure()
//     }
// }

// saveDB("pooja gangurde", () => {
//     console.log(" success:your data was saved");
//     saveDB("hello world", () => {
//         console.log(" success2:your data was saved");
//         saveDB("how are uhh1", () => {
//             console.log(" success3:your data was saved");
//         }, () => {
//             console.log(" failure3:Weak Connection your data was not saved");
//         })
//     }, () => {
//         console.log(" failure2:Weak Connection your data was not saved");
//     })
// }, () => {

//     console.log(" failure:Weak Connection your data was not saved");
// })



//promises

// function saveDB(data) {


//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success:Data was saved");
//         } else {
//             reject("Failur:Weak Connections");
//         }

//     })
// }

// saveDB("apna college");


//then( ) and catche() method
//promises chaning



function saveDB(data) {


    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success:Data was saved");
        } else {
            reject("Failur:Weak Connections");
        }

    })
}

let request = saveDB("apna college");
// console.log(request);
request.then((result) => {
    console.log("result:", result);
    console.log(" data1 saved.Promis was resolved ");
    // saveDB("pooja gangurde")
    //     .then(() => {
    //         console.log(" data2  saved.Promis was resolved ");
    return saveDB("pooja");
})
    .then((result) => {
        console.log("result:", result);
        console.log("data2 was saved");
        return saveDB("gangurde");
    }).then((result) => {
        console.log("result:", result);
        console.log("data3 was saved")
    })
    .catch((erro) => {
        console.log("error:", erro);
        console.log("promises was rejected");
    })


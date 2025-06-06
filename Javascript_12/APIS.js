// let jsonRs = '{"fact":"pooja","length":77}';
// // console.log(jsonRs);
// let validRes = JSON.parse(jsonRs);
// console.log(validRes.fact);



// let obj = {
//     name: "pooja",
//     marks: 99
// };



//fetch(url)


let url = "https://catfact.ninja/fact";
fetch(url)
    .then((response) => {
        console.log(response);
        // console.log(response.json());
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        console.log("dta1 = ", data.fact);
        return fetch(url);
    })
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        console.log("data2 =", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR-", err);
    })




//using fetch with async-await


// let url = "https://catfact.ninja/fact";

async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    console.log(data.fact);

}
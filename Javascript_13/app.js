//Cat API

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     // console.log("button was cliced");
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;


// })


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res.data);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error-", e);
//         return "No Fact Found"
//     }

// }


// Dog API
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImg();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link)




// })


// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getImg() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error-", e);
//         return "No Fact Found"
//     }

// }



//Sending Header to axios
// let url = "https://icanhazdadjoke.com/";

// async function getjokes() {
//     try {

//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }
//     catch (e) {
//         console.log("error-", e);
//     }
// }


//updating Queryb string

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let contry = document.querySelector("input").value;
    console.log(contry);
    // console.log("button was clicked");
    let clg = await getColleges(contry);
    // console.log(clg);
    show(clg);

})
function show(clg) {
    let list = document.querySelector("ul");
    list.innerText = "";

    for (col of clg) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

// let contry = "nepal";
async function getColleges(contry) {
    try {
        let res = await axios.get(url + contry)
        return res.data;
    } catch (e) {
        console.log("error-", e);
        return [];
    }

}



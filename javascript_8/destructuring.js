// let name = ["pooja", "kalyani", "samiksha"];
// let [winner, runnerup] = name;
// console.log(winner, runnerup);


//destructuring on object

const student = {
    name: "pooja gangurde",
    age: 22,
    class: 9,
    subject: ["hindi", "marathi"],
    username: "pooja@123",
    Password: "andb"
};
let { username, Password } = student;
console.log(username, Password);



// let fruits = ["mango", "litch", "orange", "mango", "banana"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }


//Reverse order

// let fruits = ["mango", "litch", "orange", "mango", "banana"];
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(i, fruits[i]);
// }

//Loops with Array(Nested Loop with Nested Array)

let heroes = [["ironman", "spiderman", "thor"], ["supernman", "wonder women", "flash"]];
for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}


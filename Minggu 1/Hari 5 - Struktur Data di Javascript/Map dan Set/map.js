let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach((key, value) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

// let obj = Object.fromEntries(map.entries()); // make a plain object from map (*)
let obj = Object.fromEntries(map); // omit .entries()

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2

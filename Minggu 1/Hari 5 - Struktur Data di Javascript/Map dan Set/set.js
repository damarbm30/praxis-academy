let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

// iterating over Set

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

let newSet = new Set(["oranges", "apples", "bananas"]);

for (let value of newSet) console.log(value);

// the same with forEach:
newSet.forEach((value, valueAgain) => {
  console.log(value);
});

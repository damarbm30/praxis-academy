function aclean(arr) {
  let map = new Map();

  for (let item of arr) {
    sortedItem = item.toLowerCase().split("").sort().join("");
    map.set(sortedItem, item);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

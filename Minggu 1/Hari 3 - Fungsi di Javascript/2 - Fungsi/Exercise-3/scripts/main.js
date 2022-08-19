function countBs(string) {
  let count = 0;
  for (let i in string) {
    if (string[i] === "B") count += 1;
  }
  return count;
}

function countChar(string, target) {
  let count = 0;
  for (let i in string) {
    if (string[i] === target) count += 1;
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

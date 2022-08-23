function unique(arr) {
  return Array.from(new Set(arr)); // convert array-likes or iterable to a real array
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values)); // Hare, Krishna, :-O

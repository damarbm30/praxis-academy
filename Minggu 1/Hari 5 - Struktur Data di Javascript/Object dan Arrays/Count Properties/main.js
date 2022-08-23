let user = {
  name: "John",
  age: 30,
};

function countObjectKeys(obj) {
  return Object.keys(obj).length;
}

console.log(countObjectKeys(user));

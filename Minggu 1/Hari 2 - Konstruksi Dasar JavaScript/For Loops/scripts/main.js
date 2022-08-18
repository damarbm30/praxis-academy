first = document.getElementById("firstOutput");
second = document.getElementById("secondOutput");

const arr = [3, 5, 7];
arr.foo = "hello";
var forIn = "";
var forOf = "";

for (const i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
  forIn += i;
}

for (const i of arr) {
  console.log(i); // logs 3, 5, 7
  forOf += i;
}

first.innerHTML = forIn;
second.innerHTML = forOf;

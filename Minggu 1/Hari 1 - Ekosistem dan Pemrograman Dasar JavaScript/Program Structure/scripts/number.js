let theNumber = Number(prompt("Pick a number"));
let result;

if (!Number.isNaN(theNumber)) {
  result = theNumber * theNumber;
  console.log("Your number is the square root of " + result);
}

myHeading = document.querySelector("h1");
myHeading.textContent = `${result}`;

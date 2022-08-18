var num = "";

number = document.getElementById("number");

for (let i = 0; i <= 15; i++) {
  num += i + " ";
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

number.innerHTML = num;

function myFunction() {
  const message = document.getElementById("output");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;

  try {
    // throw lets you create custom error
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    // catch will receive the error statement made by throw command
    message.innerHTML = "Input is " + err;
  }
}

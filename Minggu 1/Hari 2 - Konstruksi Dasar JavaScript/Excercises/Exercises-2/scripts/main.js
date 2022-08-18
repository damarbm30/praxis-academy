var num1, num2, num3;
num1 = prompt("Enter first number: ");
num2 = prompt("Enter second number: ");
num3 = prompt("Enter third number: ");

firstNumber = document.getElementById("firstNumber");
secondNumber = document.getElementById("secondNumber");
thirdNumber = document.getElementById("thirdNumber");
output = document.getElementById("output");

firstNumber.innerHTML = num1;
secondNumber.innerHTML = num2;
thirdNumber.innerHTML = num3;

if (num1 > 0 && num2 > 0 && num3 > 0) {
  output.innerHTML = "Positive sign";
} else if (num1 > 0 && num2 < 0 && num3 < 0) {
  output.innerHTML = "Positive sign";
} else if (num1 < 0 && num2 > 0 && num3 < 0) {
  output.innerHTML = "Positive sign";
} else if (num1 < 0 && num2 < 0 && num3 > 0) {
  output.innerHTML = "Positive sign";
} else {
  output.innerHTML = "Negative sign";
}

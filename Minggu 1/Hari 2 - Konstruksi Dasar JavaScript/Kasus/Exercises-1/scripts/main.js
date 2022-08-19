var num1, num2;
num1 = prompt("Enter first number: ");
num2 = prompt("Enter second number: ");

firstNumber = document.getElementById("firstNumber");
secondNumber = document.getElementById("secondNumber");
output = document.getElementById("output");

firstNumber.innerHTML = num1;
secondNumber.innerHTML = num2;

if (num1 > num2) {
  output.innerHTML = num1;
} else if (num2 > num1) {
  output.innerHTML = num2;
} else {
  output.innerHTML = "Both numbers are equal";
}

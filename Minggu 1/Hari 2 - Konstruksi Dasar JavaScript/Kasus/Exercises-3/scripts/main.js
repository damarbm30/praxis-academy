var num1, num2, num3, biggest;
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

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    output.innerHTML = num1 + ">" + num2 + ">" + num3;
    biggest = num1;
  } else {
    output.innerHTML = num1 + ">" + num3 + ">" + num2;
    biggest = num1;
  }
} else if (num2 > num3 && num2 > num1) {
  if (num1 > num3) {
    output.innerHTML = num2 + ">" + num1 + ">" + num3;
    biggest = num2;
  } else {
    output.innerHTML = num2 + ">" + num3 + ">" + num1;
    biggest = num2;
  }
} else {
  if (num1 > num2) {
    output.innerHTML = num3 + ">" + num1 + ">" + num2;
    biggest = num3;
  } else {
    output.innerHTML = num3 + ">" + num2 + ">" + num1;
    biggest = num3;
  }
}

window.alert("The biggest number is " + biggest);

var num1, num2, num3, num4, num5, biggest;
num1 = 1;
num2 = 3;
num3 = 8;
num4 = 13;
num5 = 22;

firstNumber = document.getElementById("firstNumber");
secondNumber = document.getElementById("secondNumber");
thirdNumber = document.getElementById("thirdNumber");
fourthNumber = document.getElementById("fourthNumber");
fifthNumber = document.getElementById("fifthNumber");
output = document.getElementById("output");

firstNumber.innerHTML = num1;
secondNumber.innerHTML = num2;
thirdNumber.innerHTML = num3;
fourthNumber.innerHTML = num4;
fifthNumber.innerHTML = num5;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  output = num1 + " is the biggest number";
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  output = num2 + " is the biggest number";
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  output = num3 + " is the biggest number";
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
  output = num4 + " is the biggest number";
} else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
  output = num5 + " is the biggest number";
}

window.alert(output);

function gcd_two_numbers(num1, num2) {
  let gcd;
  let output = document.getElementById("output");

  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }

  console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);
  output.innerHTML = `The GCD of ${num1} and ${num2} is ${gcd}`;
}

gcd_two_numbers(60, 72);

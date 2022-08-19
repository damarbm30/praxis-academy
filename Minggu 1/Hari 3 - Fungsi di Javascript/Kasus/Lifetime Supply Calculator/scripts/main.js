var output = document.getElementById("output");

function calculateSupply(age, amountDay) {
  let maxAge = 80;
  let supply = amountDay * 365 * (maxAge - age);
  output.innerHTML = `You need ${supply} supplies to survive the remaining ${maxAge - age} years`;
}

calculateSupply(50, 3.5);

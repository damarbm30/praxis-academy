// const numbers = [175, 50, 25];
// const result = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

// console.log(result);

const numbers = [15.5, 2.3, 1.1, 4.7];
result_2 = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

console.log(result_2);

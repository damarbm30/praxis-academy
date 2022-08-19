function isEven(num) {
  if (num < 0) {
    num = Math.abs(num);
  }
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    num -= 2;
    return isEven(num);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

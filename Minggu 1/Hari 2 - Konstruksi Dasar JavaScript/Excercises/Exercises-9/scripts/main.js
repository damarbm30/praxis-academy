function armstrong_finder() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        sum = i * 100 + j * 10 + k;
        cube = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
        if (sum == cube) {
          console.log(cube);
        }
      }
    }
  }
}
armstrong_finder();

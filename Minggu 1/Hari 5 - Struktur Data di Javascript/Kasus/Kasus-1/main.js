let matrix_1 = [1, 2, 3];
let matrix_2 = [1, 2, 3];

function matrixAddition(matrix_1, matrix_2) {
  if (matrix_1.length === matrix_2.length) {
    console.log("Dimensi matriks sama, operasi dapat dilanjutkan");
    for (let i = 0; i < matrix_2.length; i++) {
      if (matrix_1.length == 0) {
        for (let j = 0; j < matrix_2.length; j++) {
          result.push(0);
        }
      }

      matrix_1[i] += matrix_2[i];
    }

    return matrix_1;
  } else {
    return false;
  }
}

console.log(matrixAddition(matrix_1, matrix_2));

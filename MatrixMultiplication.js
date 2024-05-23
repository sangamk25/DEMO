function elementWiseMultiplication(matrix1, matrix2) {
  let result = [];

  // Iterate through each row
  for (let i = 0; i < matrix2.length; i++) {
    let row = [];

    // Iterate through each column
    for (let j = 0; j < matrix2[i].length; j++) {
      // Multiply corresponding elements and store in the result matrix
      row.push(matrix1[i][j] * matrix2[i][j]);
    }

    result.push(row);
  }

  return result;
}

// Define the matrices
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrix2 = [
  [1, 2, 3],
  [3, 4, 5],
  [7, 8, 9],
];

// Perform element-wise multiplication

let result = elementWiseMultiplication(matrix1, matrix2);


for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}

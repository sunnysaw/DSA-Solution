/*
You are given an N x M matrix consisting of integers. Your task is to return all elements of the matrix in spiral order, starting from the top-left corner and moving right, then down, then left, then up, and repeating this pattern until all elements are visited.

Input Format:
The first line contains two integers N and M (1 ≤ N, M ≤ 100), representing the number of rows and columns in the matrix.

The next N lines contain M integers each, representing the elements of the matrix.

Output Format:
Print a single line containing N*M space-separated integers representing the elements of the matrix in spiral order.

i/o 
3 3
1 2 3
4 5 6
7 8 9
o/p 
1 2 3 6 9 8 7 4 5

 */

function spiralMatrix(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];

  let array = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (top <= bottom && left <= right) {
    // Left to Right
    for (let i = left; i <= right; i++) {
      array.push(matrix[top][i]);
    }
    top++;

    // Top to Bottom
    for (let i = top; i <= bottom; i++) {
      array.push(matrix[i][right]);
    }
    right--;

    // Right to Left (only if there are remaining rows)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        array.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Bottom to Top (only if there are remaining columns)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        array.push(matrix[i][left]);
      }
      left++;
    }
  }

  return array;
}

// Test Case
console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); 
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


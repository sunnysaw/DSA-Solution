/*
Write a program to create a 2D array of size m x n in your preferred programming language. The program should:

Take two integer inputs, m (number of rows) and n (number of columns).
Initialize the 2D array with user-defined values.
Print the 2D array in matrix format.
You may assume that 1 ≤ m, n ≤ 10.

Enter the number of rows (m): 3  
Enter the number of columns (n): 3  

Enter elements for the 2D array:  
1 2 3  
4 5 6  
7 8 9  

 */

function creating2DArray(m, n) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < m; i++) {
    newArray[i] = [];
    for (let j = 0; j < n; j++) {
      count += 1;
      newArray[i][j] = count;
    }
  }
  return newArray;
}
console.log(creating2DArray(3, 3));
// NOTE --> JavaScript dynamically expands arrays, so it creates newArray[i][j] automatically when assigned.

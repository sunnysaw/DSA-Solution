/**
 * Question:
Implement the Bubble Sort algorithm to sort an array of integers in ascending order. Your function should take an unsorted array as input and return the sorted array.

Input: An array of integers.
Output: A sorted array in ascending order.
Note: Use the Bubble Sort algorithm to solve the problem.

Test Cases:
Test Case 1:
Input: [5, 3, 8, 4, 2]
Output: [2, 3, 4, 5, 8]

Test Case 2:
Input: [10, -1, 0, 20, 15]
Output: [-1, 0, 10, 15, 20]

 */

function BubbleSort(arr) {
  let swapValue = 0;
  for (let firstIndex = 0; firstIndex < arr.length ; firstIndex++) {
    for (let secondIndex = 0; secondIndex < arr.length - firstIndex - 1; secondIndex++) {
      if (arr[secondIndex] > arr[secondIndex + 1]) {
        swapValue = arr[secondIndex];
        arr[secondIndex] = arr[secondIndex + 1];
        arr[secondIndex + 1] = swapValue;
      }
    }
  }
  return arr;
}
console.log(BubbleSort([10, -1, 0, 20, 15]));

// time complexity - 0(n^2)
// space complexity - 0(1)
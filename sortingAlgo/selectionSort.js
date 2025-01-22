/**
 * Problem:

You are given an unsorted array of integers. Implement the Selection Sort algorithm to sort the array in ascending order.

Write a function selectionSort(arr) that accepts an array arr and sorts it in place using the Selection Sort algorithm.

Input:
An array arr[] of n integers where 1 ≤ n ≤ 10⁶ and -10⁶ ≤ arr[i] ≤ 10⁶.

Output:
Return the sorted array in ascending order.

Test Cases:
console.log(selectionSort([64, 25, 12, 22, 11]));
Output: [11, 12, 22, 25, 64]
 */

function selectionSort(arr)
{
  for (let outterLoop = 0; outterLoop < arr.length; outterLoop++) {
    let minimumValue = outterLoop;
    for (let innerLoop = outterLoop + 1; innerLoop <= arr.length; innerLoop++) {
      if (arr[minimumValue] > arr[innerLoop]) {
        minimumValue = innerLoop;
      }
    }
    if (minimumValue !== outterLoop) {
      let swapValue = arr[outterLoop];
      arr[outterLoop] = arr[minimumValue];
      arr[minimumValue] = swapValue;
    }
  }
  return arr;
}
console.log(selectionSort([4, 25, 12, 22, 11]));

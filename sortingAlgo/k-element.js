/**
 * Question: Find the Kth Largest Element in an Array
You are given an array of integers arr and an integer k. Write a function to find the Kth largest element in the array.

Example 1:
Input:
arr = [3, 2, 1, 5, 6, 4], k = 2
Output:
5
Explanation: The second largest element is 5.
 */

function KthElement(arr , k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    }
    return arr[arr.length - k]
    
    
}
console.log(KthElement([3, 2, 1, 5, 6, 4] , 2)); // [1, 2, 3, 4, 5, 6]


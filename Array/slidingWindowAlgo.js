/**
 * Description:
Given an array of integers arr and an integer k, find the maximum sum of any contiguous subarray of size k.

Input: arr = [2, 1, 5, 1, 3, 2], k = 3  
Output: 9  
Explanation: Subarray [5, 1, 3] has the maximum sum = 9.

Input: arr = [1, 2, 3, 4, 5], k = 2  
Output: 9  
Explanation: Subarray [4, 5] has the maximum sum = 9.

 */

function slidingWindow(array, k) {
  let maxSum = 0;
  let window = 0;

  for (let index = 0; index < k; index++) {
    window += array[index];
  }
  for (let index = k; index < array.length; index++) {
    window = window - array[index - k] + array[index];
    maxSum = Math.max(window, maxSum);
  }
  return maxSum;
}

console.log(slidingWindow([2, 1, 5, 1, 3, 2], 3));

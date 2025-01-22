/**
 * Question:
You are given an array nums containing only 3 distinct integers: 0, 1, and 2. Sort the array in-place so that the integers are in the order 0, 1, and 2.

Constraints:
You must solve the problem in O(n) time complexity.
The solution must use constant space (O(1)).
The array must be sorted in-place.

Input: nums = [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]

 */

function dutchNationalFlag(array) {
  if (array.length === 0) return array;
  let low = 0;
  let middle = 0;
  let high = array.length - 1;
  while (middle <= high) {
    if (array[middle] === 0) {
      [array[low], array[middle] ] = [array[middle], array[low]];
      middle++;
      low++;
    }
    else if (array[middle] === 1) {
      middle++;
    }
    else if (array[middle] === 2) {
      [array[middle], array[high]] = [array[high], array[middle]];
      high--;
    }
  }
  return array;
}
console.log(dutchNationalFlag([2, 0, 2, 1, 1, 0]));

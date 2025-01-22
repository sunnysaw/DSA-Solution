/**
 * You are given a sorted array of integers nums and an integer target. Find two numbers in the array such that their sum is equal to the target. Return the indices of the two numbers in 1-based indexing.

If there are no such numbers, return [-1, -1].
I/O = ( N = 5 )  
2 7 11 15 20  
 target = 9  
O/P = [1, 2]
 */

function twoPointer(array, target) {
  let leftPointer = 0;
  let rightPointer = array.length;
  while (leftPointer < rightPointer) {
    let result = array[leftPointer] + array[rightPointer];
    if (result === target) {
      return [leftPointer, rightPointer];
    } else if (result < target) {
      leftPointer++;
    } else rightPointer--;
  }
}
console.log(twoPointer([2, 7, 11, 15, 20], 9));

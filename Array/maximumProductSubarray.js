/**
 * Problem Statement
Given an integer array nums, find the contiguous subarray within the array (containing at least one number) which has the largest product, and return the product.

Example 1:
Input:
nums = [2, 3, -2, 4]
Output:
6
Explanation:
The subarray [2, 3] has the largest product, which is 6.
 */

function maximumProductSubarray(nums) {
  if (nums.length === 1) return nums[0]; 
  let maxProduct = nums[0];
  let currentMax = nums[0];
  let currentMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const tempMax = currentMax; 
    currentMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);
    currentMin = Math.min(nums[i], nums[i] * tempMax, nums[i] * currentMin);
    maxProduct = Math.max(maxProduct, currentMax);
  }
  return maxProduct;
}

console.log(maximumProductSubarray([2, 3, -2, 4])); // Output: 6


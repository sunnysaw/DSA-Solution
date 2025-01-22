/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 */

function trappingRainWater(height) {
    let leftStart = 0;
    let rightStart = height.length - 1;
    let leftmaxHeight = 0;
    let rightmaxHeight = 0;
    let waterContainer = 0;
    while (leftStart < rightStart) {
        if (height[leftStart] <= height[rightStart]) {
            if (height[leftStart] >= leftmaxHeight) {
                leftmaxHeight = Math.max(height[leftStart], leftmaxHeight);
                leftStart++
            } else {
                waterContainer += leftmaxHeight - height[leftStart];
                leftStart++;    
            }
        } else {
            if (height[rightStart] >= rightmaxHeight)  {
                rightmaxHeight = height[rightStart];
                rightStart--;
            } else {
                waterContainer += rightmaxHeight - height[rightStart];
                rightStart--;
            }
        }
    }
    return waterContainer;
}


// Example Usage:
console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trappingRainWater([4, 2, 0, 3, 2, 5]));                  // Output: 9

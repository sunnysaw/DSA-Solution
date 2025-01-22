/**
 * you are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, 
 */
function containerWithMostWater(height) {
    let leftWall = 0;
    let rightWall = height.length - 1;
    let maxWater = 0;
    while (leftWall < rightWall) {
        let currentWidth = rightWall - leftWall;
        let currentHeight = Math.min(height[rightWall] , height[leftWall]);
        let currentWater = currentHeight * currentWidth;
        maxWater = Math.max(currentWater, maxWater);
        if (height[leftWall] < height[rightWall]) {
            leftWall++
        } else {
            rightWall--;
        }
    }
    return maxWater;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/**
 * You are given an array of integers, which may contain both positive and negative numbers. Your task is to determine the maximum sum of a contiguous subarray in the given array.
 * I/O = 7  
3 8 -2 -1 6 -10 4  
O/P = 14
 */

let currentSun = 0;
let maximumNumber = -Infinity;

function KadanesAlgo(array) {
    for (let index = 0; index < array.length ; index++) {
        currentSun += array[index];
        maximumNumber = Math.max(maximumNumber, currentSun);
        if (currentSun < 0) {
            currentSun = 0;
        }
    }
    return maximumNumber;
}
console.log( KadanesAlgo([1,2,3,-2,5,-1]));

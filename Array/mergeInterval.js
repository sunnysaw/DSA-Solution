/**
 * Problem:
You are given an array of meetings, where each meeting is represented as [start, end]. Determine the minimum number of meeting rooms required to schedule all the meetings without overlapping.

Input: meetings = [[7, 10], [2, 4]]
Output: 1
Explanation: There is no overlap, so only 1 room is needed.

Input: meetings = [[0, 30], [5, 10], [15, 20]]
Output: 2
Explanation:
- Meeting 1: [0, 30]
- Meeting 2: [5, 10] overlaps with Meeting 1.
- Meeting 3: [15, 20] overlaps with Meeting 1 but not with Meeting 2.
At least 2 rooms are needed.

 */
function mergeInterval(array) {
  if (array.length === 0) return 0;
  array.sort((a , b) => a[0] - b[0])
  let resutl = [array[0]];
  for (let index = 1; index < array.length; index++) {
    let currentInterval = array[index];
    let lastMergeInterval = resutl[resutl.length - 1];
    if (currentInterval[0] <= lastMergeInterval[1]) {
      lastMergeInterval[1] = Math.max(currentInterval [1], lastMergeInterval[1]);
    }
    else {
      resutl.push(currentInterval)
    }
    
  }
  return resutl.length;
}
console.log(
  mergeInterval([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

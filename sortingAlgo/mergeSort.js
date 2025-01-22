/**
 * Question: Sort an Array Using Merge Sort
You are given an array of integers arr. Write a function to sort the array in ascending order using the Merge Sort algorithm.
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  let leftHalf = mergeSort(left);
  let rightHalf = mergeSort(right);

  return mergeArray(leftHalf, rightHalf);
}
function mergeArray(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}
console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

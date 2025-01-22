function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2); // Correctly find the pivot index
  let pivot = arr[pivotIndex]; // Get the pivot value
  let leftHalf = [];
  let rightHalf = [];

  for (let index = 0; index < arr.length; index++) {
    if (index === pivotIndex) {
      continue; // Skip the pivot index
    }
    if (arr[index] < pivot) {
      // Compare with the pivot value
      leftHalf.push(arr[index]);
    } else {
      rightHalf.push(arr[index]);
    }
  }

  // Recursively sort and return the combined array
  return [...quickSort(leftHalf), pivot, ...quickSort(rightHalf)];
}

console.log(quickSort([5, 3, 7, 6, 2, 9])); // Output: [2, 3, 5, 6, 7, 9]

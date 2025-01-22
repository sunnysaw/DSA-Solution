function countingSort(arr) {
  const max = Math.max(...arr); // Find the maximum value
  const min = Math.min(...arr); // Find the minimum value
  const range = max - min + 1; // Calculate the range
  const count = Array(range).fill(0); // Initialize count array
  const output = Array(arr.length); // Output array

  // Count occurrences of each element
    arr.forEach((num) =>
    {
        console.log(num);
        console.log(min);
        
        count[num - min]++;
        console.log(count);
        
    });

  // Cumulative sum to determine positions
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Place elements in sorted order
  for (let i = arr.length - 1; i >= 0; i--) {
    output[--count[arr[i] - min]] = arr[i];
  }

  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
countingSort(arr);
// console.log(countingSort(arr)); // Output: [1, 2, 2, 3, 3, 4, 8]

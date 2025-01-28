/*
Write a function that takes a number as an argument and prints a half pyramid pattern of that many rows. Each row should contain the digits from 1 to the row number. The pattern should be right aligned.
I/O = 4;
O/P :
1
1 2
1 2 3
1 2 3 4
 */

function halfPyramidPattern(digits) {
  if (digits === 1) return digits;
  let count = 1;
  let result = "";
  while (count <= digits) {
    result += count + " ";
    console.log(result);
    count++;
  }
}
halfPyramidPattern(52);

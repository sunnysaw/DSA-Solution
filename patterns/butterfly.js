/*
Write a program in Java that prints the Butterfly Pattern for a given number of rows N. The butterfly pattern is a symmetrical pattern where each row contains a combination of stars (*) and spaces ( ), resembling butterfly wings.

For N = 4, the pattern should look like this:
*      *
**    **
***  ***
********
***  ***
**    **
*      *

 */

function butterfly(n) {
  for (let rowIndex = 1; rowIndex <= n; rowIndex++) {
    let star = "*".repeat(rowIndex);
    let space = " ".repeat(2 * (n - rowIndex));
    console.log(star + space + star);
    }
    for (let colIndex = n - 1; colIndex >= 1; colIndex--) {
      let star = "*".repeat(colIndex);
      let space = " ".repeat(2 * (n - colIndex));
      console.log(star + space + star);
    }
}
butterfly(4)

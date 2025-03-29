/*
 Write a program in JavaScript to print a Hollow Rhombus Pattern for a given number of rows N. The rhombus should have stars (*) along its boundary and spaces ( ) inside it.

Example:
For N = 5, the output should look like this:
    *****
   *   *
  *   *
 *   *
*****

 */

function hollow(number) {
  for (let rowIndex = 1; rowIndex <= number; rowIndex++) {
    let extraSpace = " ".repeat(number - rowIndex);
    process.stdout.write(extraSpace);
    if (rowIndex === 1 || rowIndex === number) {
      let start = "*".repeat(5);
      process.stdout.write(start);
    } else {
      let start = "*".repeat(1);
      let space = " ".repeat(3);
      process.stdout.write(start + space + start);
    }
    console.log();
  }
}
hollow(5);

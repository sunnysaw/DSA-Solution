/**
 Write a program in JavaScript to print a Solid Rhombus Pattern for a given number of rows N. The rhombus is a symmetric pattern that uses spaces and stars (*) to form its shape.

 For N = 5, the output should look like this:
    *****
   *****
  *****
 *****
*****
 */

function solidRhombusPattern(number) {
  for (let rowIndex = number - 1; rowIndex >= 0; rowIndex--) {
    let space = " ".repeat(rowIndex);
    let stars = "*".repeat(5);
    console.log(space + stars);
  }
}
solidRhombusPattern(5)

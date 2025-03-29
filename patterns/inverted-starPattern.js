/*
Print the following pattern for the given N number of rows.
* * * *
* * *
* *
*
 */
function generateStarPattern(n) {
  let result = "";
  for (let index = 1; index <= n; index++) {
    let star = "";
    for (let secondIndex = index; secondIndex <= n; secondIndex++) {
      star += "*";
    }
    result += star + "\n"; // Append to result with a newline
  }
  return result; // Return the complete pattern
}

// Example Usage
console.log(generateStarPattern(5));

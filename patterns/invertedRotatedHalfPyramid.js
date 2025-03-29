/*
Write a program to print an inverted and rotated half pyramid of size n rows. The pattern should look like this for n = 5:
    *
   **
  ***
 ****
*****
 */
function invertedPyramide(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    console.log();
  }
}
invertedPyramide(4);

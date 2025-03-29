/*
 * * * * *
 *       *
 *       *
 *       *
 * * * * *
 */

function hollowRectanglePattern(n, m) {
  for (let rowIndex = 1; rowIndex <= n; rowIndex++) {
    for (let colIndex = 1; colIndex <= m; colIndex++) {
      if (rowIndex == 1 || rowIndex == n || colIndex == 1 || colIndex == m) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
      }
      console.log();
      
  }
}
hollowRectanglePattern(3, 5);

// node hollowRectanglePattern

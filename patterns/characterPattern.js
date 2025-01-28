/*
A
BC
DEF
GHIJ
 */

function characterPattern(digits) {
  if (digits === 1) return digits;
  let count = 1;
  let result = "A ";
    while (count <= digits) {
      console.log(result);
      result += String.fromCharCode(count + 65) + " ";
    count++;
  }
}
characterPattern(4);
// 65 = is for ABCDEFGHIJKLMNOPQRSTUVWXYZ convtering form numbers
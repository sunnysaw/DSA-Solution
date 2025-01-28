/**
  Print star print
 *
 * *
 * * *
 * * * *
 */

function starPattern(digits) {
  for (let index = 0; index <= digits; index++) {
      let str = "";
    for (let j = 0; j <= index; j++) {
        str += "* ";
      }
      console.log(str);
      
  }
}
starPattern(3);

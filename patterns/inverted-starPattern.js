/*
Print the following pattern for the given N number of rows.
* * * *
* * *
* *
*
 */
function invertedStarPattern(digits)
{
   for (let index = 1; index <= digits; index++) {
       let star = "";
       for (let secondIndex = index; secondIndex <= digits; secondIndex++) {
           star += '*';
       }
    console.log(star);
    
   }
}
invertedStarPattern(4);
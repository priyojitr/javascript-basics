/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
    // output string to be printed
    let outputString = '';
    // starting row index - 0:first row
    let rowIndex = 0;
    while(rowIndex < height) {
        // insert spaces between '*'
        for (let bIdx = 0; bIdx < height - rowIndex; bIdx = bIdx + 1) {
            outputString = outputString + ' ';
        }
        // insert '*' as appropriate
        for (let sIdx = 0; sIdx < rowIndex + 1; sIdx = sIdx + 1) {
            outputString = outputString + '* ';
        }
        // adding new line char for each row
        outputString = outputString + ' \n';
        rowIndex = rowIndex + 1;
    }
    return outputString;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

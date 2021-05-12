/**
 * circular matrix, you need an array and the number of turns
 * @example
 * // returns 
 * [ 2, 3, 4, 5, 1 ]
   [ 3, 4, 5, 1, 2 ]
   [ 4, 5, 1, 2, 3 ]
 * rotLeft([1, 2, 3, 4, 5 ], 3);
 * @returns {Array} Returns the array of x for the turns.
 */
const rotLeft = (a, d) => {
  if (a instanceof Array) {
    for (let i = 0; i <= d - 1; i++) {
      a.push(a.shift())
      console.log(a)
    }
  }
}
module.exports = {
  rotLeft
}

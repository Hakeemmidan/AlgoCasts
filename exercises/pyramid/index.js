// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' 5 - 1 === 1
//       ' ### ' 5 - 2 === 3
//       '#####'

// input : int
// output : str
// objective : make a pyramid using hashtags (#) that has n number of rows

function pyramid(n) {
    const numCols = (n * 2) - 1
    const midPoint = Math.floor(numCols / 2)
    let res;

    for (let row = 0; row < n; row++) {
        res = '';

        for (let col = 0; col < numCols; col++) {
            if (midPoint - row <= col && midPoint + row >= col) {
                res += '#'
            } else {
                res += ' '
            }
        }
        
        console.log(res)
    }
}

module.exports = pyramid;

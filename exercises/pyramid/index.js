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

/*
// method 1 : iterative
function pyramid(n) {
    // calculate number of columns in relation to rows
    // calculate where mid point is going to be
    // keep a level variable
        // use for console logs

    // iterate through each row
        // Empty out level
        // iterate through each column
            // if (midpoint - row <= column) AND (midpoint + row >= column)
                // add a hash to level
            // otherwise
                // add a space
    // console log level
    const numCols = (2 * n - 1)
    const midPoint = Math.floor(numCols / 2)
    let level;

    for (let row = 0; row < n; row++) {
        level = ''
        for (let col = 0; col < numCols; col++) {
            if (midPoint - row <= col && midPoint + row >= col) {
                level += '#'
            } else {
                level += ' '
            }
        }

        console.log(level)
    }
}
*/

// method 2 : recursive
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return
    }
    const numCols = (2 * n) - 1
    const midPoint = Math.floor(numCols / 2)

    // if the length of level is equal to number of columns
    // then console log level
    // go to next row
    if (level.length === numCols) {
        console.log(level)   
        return pyramid(n, row + 1)
    }

    let add;
    // you can think of level as col
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }

    pyramid(n, row, level + add)
}

module.exports = pyramid;

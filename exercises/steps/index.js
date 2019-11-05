// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
// Method 1 : Loop through each row and fill with row-number of hashtags
    // fill rest with empty spaces
function steps(n) {
    let result;

    for (let row = 0; row < n; row++) {
        result = '';
        
        for (let col = 0; col <= row; col++) {
            result += '#'
        }

        for (let k = 0; k < n - 1 - row; k++) {
            result += ' '
        }
        console.log(result)
    }
}
*/

// method 2 : Loop through each row and column (double loop again)
    // if col number is equal to or less than row, then fill result with hashtags
    // otherwise, fill it with empty spaces
function steps(n) {
    // keep a result variable to console log
    // loop through rows
        // loop through cols
        // if col <= row, result += '#'
        // else result += ' '
    // console log result
    let result;

    for (let row = 0; row < n; row++) {
        result = ''
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                result += '#'
            } else {
                result += ' '
            }
        }
        console.log(result)
    }
}

module.exports = steps;

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

function steps(n) {
    let result;

    for (let i = 0; i < n; i++) {
        result = '';
        
        for (let j = 0; j <= i; j++) {
            result += '#'
        }

        for (let k = 0; k < n - 1 - i; k++) {
            result += ' '
        }
        console.log(result)
    }
}

module.exports = steps;

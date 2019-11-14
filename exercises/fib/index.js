// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// input : int
// output : arr
// objective : find the nth fib num

/*
// ---------------------------------------------------------------------------- //
// method 1 : iterative with no arr
function fib(n) {
    // keep track of 4 variables
    // last num, before last num, and counter (default is 2), and result
    // if n === 0 return 0
    // if n === 1 return 1
    // Otherwise, add last num and before last num and increase counter by one
        // Update other variables accordingly
    // keep doing this until counter === n
    // return result variable
    
    if (n === 0 || n === 1) {
        return n;
    }

    let lastNum = 1;
    let beforeLastNum = 0;
    let result = lastNum + beforeLastNum;
    let counter = 2;

    for (counter; counter < n; counter++) {
        beforeLastNum = lastNum;
        lastNum = result;
        result = beforeLastNum + lastNum;
    }

    return result;
}
// time : n
// sapce : 1
*/
/*
// method 2: iteratively with arr
function fib(n) {
    // if n === 0 or 1 return n
    // otherwise keep variable arr that keeps track of fib nums
    // keep adding the sum of the last two nums to it until it has length n + 1
    // then return last element

    if (n === 1 || n === 0) {
        return n;
    }

    let fibs = [0, 1]
    let lastNum;
    let beforeLastNum;

    while (fibs.length < n + 1) {
        lastNum = fibs[fibs.length - 1]
        beforeLastNum = fibs[fibs.length - 2]

        fibs.push(lastNum + beforeLastNum)
    }

    return fibs[fibs.length - 1]
}
// time : n^2 (assuming that getting the length is O(n))
// space : 1
*/

// method 3: recurively
function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}
// time : 2 ^ n
// space : 1

module.exports = fib;

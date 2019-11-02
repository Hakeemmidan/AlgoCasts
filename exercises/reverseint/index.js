// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // input : int
    // output : int
    // objetive : reverse int
    // pps : single digit nums would be a double digit num when reversed
    // method 1 : covert to stirng, reverse string, convert back to a num
        // if str length === 1, put a 0 in front of it
        // if str is negative remove negative sign and put it back in when reversal is complete
        // if str has trailing zeros, remove them
        // now you can reverse the string normally
    let strInt = String(n)
    let hasNegSign = false

    if (strInt.length === 1) {
        return n
    }

    if (strInt.includes('-')) {
        strInt = strInt.slice(1)
        hasNegSign = true
    }
    // It's fine if there are trailing zeros, b/c reversing the string will put them in front
    // converting that to an integer will get rid of the zeros (I think)
    
    strInt = strInt.split('').reverse().join('')
    let newInt = parseInt(strInt)
    if (hasNegSign) newInt = newInt * -1
    
    return newInt
}

module.exports = reverseInt;

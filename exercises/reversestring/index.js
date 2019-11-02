// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ------------------------------------------ //

// input : str
// output : str
// objective : reverse the string using three differernt ways

/*
// method1 : using reverse for loop
function reverse(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }

    return newStr
}
// time : n
// space : n
*/

/*
function reverse(str) {
    // method 2: recursion
    if (str.length === 1) {
        return str
    }

    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
// time : n^2
// space : 1
*/

function reverse(str) {
    // method: Using Array.prototype.reverse
    return str.split('').reverse().join('')
}
// time: n
// space: 1

module.exports = reverse;

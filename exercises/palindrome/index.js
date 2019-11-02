// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
// method 1 : use str.split('').reverse().join('')
function palindrome(str) {
    // input : str
    // output : bool
    // objective : determine if given str is a palindrom or not
    return str.split('').reverse().join('') === str
}
*/

// method 2 : Use a for loop to reverse the str
// method 3 : Use recursion to reverse the str
// method 4 : Use Array.every() to compare the current char to its opposing char
    // by comparing current char and char at length - idx
function palindrome(str) {
    const strLength = str.length - 1
    return str.split('').every((char, idx) => {
        return char === str[strLength - idx]
    })
}

module.exports = palindrome;

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
// method 1 : use slice and toUpperCase()
function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
*/

// method 2 : Use a for loop that checks if the previous char is a space or not
function capitalize(str) {
    // Have a result variable that has first letter capitalized
    // Loop through the string starting at one
    // if there is a space at i - 1, then capitalize the letter at i and push to reuslt
    // if not, just push to result
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        result += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i]
    }

    return result
}

module.exports = capitalize;

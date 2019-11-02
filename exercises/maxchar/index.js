// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // input : str
    // output : str
    // objetive : return character that is most repeated. 
    
    // method : set mostRepeated var to first letter. Go through each character,
    // if it has more repetetion than first character. Then replace it and put that one instead

    let mostRepeated = str[0]
    let mostRepeatedCount = 0;

    for (let i = 0; i < str.length; i++) {
        let currentCharCount = countChar(str[i], str)
        if (currentCharCount > mostRepeatedCount) {
            mostRepeated = str[i]
            mostRepeatedCount = currentCharCount
        }
    }

    return mostRepeated
}

function countChar(char, str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) count++
    }

    return count
}

module.exports = maxChar;

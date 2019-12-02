// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// input : str
// output : str
// objetive : return character that is most repeated. 

/*
// method 1 : (using helper method)set mostRepeated var to first letter. Go through each character,
// if it has more repetetion than first character. Then replace it and put that one instead
function maxChar(str) {
    

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
*/

/*
// method 2 : (using an object) have variables that keep track of
// most commonly repeated char and how many times it was repeated
// If any new char exceeds that current then replace it with new values

function maxChar(str) {
    const charCounts = {}
    let mostRepeatedChar = '';
    let mostRepeatedCharCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        charCounts[char] = charCounts[char] + 1 || 1

        if (charCounts[char] > mostRepeatedCharCount) {
            mostRepeatedChar = char
            mostRepeatedCharCount = charCounts[char]
        }
    }

    return mostRepeatedChar
}
*/

// method 3 : author's way
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;

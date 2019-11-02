// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // input : str, str
    // output : bool
    // objective : check if two strings have same count of each letter
    // method : use an object that collects the letters for each str
        // then compare both objects using JSON.stringify()
    let strAObj = {}
    let currentLetter;

    for (let i = 0; i < stringA.length; i++) {
        currentLetter = stringA[i]
        if (strAObj[currentLetter]) {
            strAObj[currentLetter] += 1
        } else {
            strAObj[currentLetter] = 1
        }
    }

    let strBObj = {}
    for (let j = 0; j < stringB.length; j++) {
        currentLetter = stringB[j]
        if (strBObj[currentLetter]) {
            strBObj[currentLetter] += 1
        } else {
            strBObj[currentLetter] = 1
        }
    }

    return JSON.stringify(strAObj) === JSON.stringify(strBObj)
}

module.exports = anagrams;

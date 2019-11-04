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
    // pps : letters must be lower case
         //  Get rid of anything that is not a letter
         
    let strAObj = {}
    let currentLetter;
    let filteredStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let filteredStringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    

    for (let i = 0; i < filteredStringA.length; i++) {
        currentLetter = filteredStringA[i]
        if (strAObj[currentLetter]) {
            strAObj[currentLetter] += 1
        } else {
            strAObj[currentLetter] = 1
        }
    }

    let strBObj = {}
    for (let j = 0; j < filteredStringB.length; j++) {
        currentLetter = filteredStringB[j]
        if (strBObj[currentLetter]) {
            strBObj[currentLetter] += 1
        } else {
            strBObj[currentLetter] = 1
        }
    }

    return checkEqualObjects(strAObj, strBObj)
}

function checkEqualObjects(obj1, obj2) {
    // input : obj, obj
    // output : bool
    // objective : check if the two objects are equal
    // method : find longer length object by measuring length of keys and then check that the values
    // for for each key are the same in both objects
    // pps : Only works on one level objects (the value cannot be another object)
    const longerObj = Object.keys(obj1).length > Object.keys(obj2) ? obj1 : obj2

    return Object.keys(longerObj).every(key => obj1[key] === obj2[key]);
}

module.exports = anagrams;

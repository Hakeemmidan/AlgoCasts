// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// input : str
// output : int
// objective : count number of vowels in strings
// pps : lower case string

function vowels(str) {
    // keep a counter set to 0
    // have a variable that contins an array of vowels
    // go through each letter using loop
    // counter += 1 if char is a vowel
    str = str.toLowerCase()
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter += 1
        }
    }

    return counter
}

module.exports = vowels;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// input : array, int
// output : array of arrays
// objective : chunch the array into n sized chunks

/*
// method 1 : slice array into given sized chuncks using for loop that increments using given size
function chunk(array, size) {
    let result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result;
}
// time : n^2
// space : n
*/

// method 2 : Keep track of the last chunk
    // That is:
        // if it reaches wanted size then ignore it and add a new chunck
        // else keep adding to it
function chunk(arr, size) {
    let chunked = [];
    let last;
    
    for (let element of arr) {
        last = chunked[chunked.length - 1]
        
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }

    return chunked
}
// time : n
// space : 1 (since we have a constant number of variables)

module.exports = chunk;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // input : array, int
    // output : array of arrays
    // objective : chunch the array into n sized chunks
    // method : slice array into given sized chuncks using for loop that increments using given size
    let result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result;
}

// time : n
// space : n

module.exports = chunk;

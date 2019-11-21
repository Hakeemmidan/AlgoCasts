// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// input : linkedlist, int
// output : node
// objective : find the node n steps away from the last node

// side notes
    // n will always be less than linkedlist size
        // i.e. linkedlist is never going to be 0
    // You can't use the size method

// method :
    // removeLast n times
    // getLast

function fromLast(list, n) {
    for (let i = 0; i < n; i++) {
        list.removeLast()
    }

    return list.getLast()
}

module.exports = fromLast;

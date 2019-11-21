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

/*
// method 1 :
    // removeLast n times
    // getLast
function fromLast(list, n) {
    for (let i = 0; i < n; i++) {
        list.removeLast()
    }

    return list.getLast()
}
*/

/*
// method 2 : pointers
function fromLast(list, n) {
    // create fast and slow pointers
    // point both to first element
    // point fast n elements ahead
    // move both pointers one step at a time
    // if fast is at last node (next === null)
        // return slow pointer
    // else
        // keep moving forward
    let slow = list.head;
    let fast = list.head;

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    while (true) {
        if (fast.next === null) {
            return slow
        } else {
            fast = fast.next;
            slow = slow.next;
        }
    }
}
*/

// method 3 : pointers but more efficent
function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow
}

module.exports = fromLast;

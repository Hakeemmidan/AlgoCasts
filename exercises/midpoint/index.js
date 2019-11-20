// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// input : linked list
// output : node
// objective : find the middle node of linked list by
    // iterating through it only once
// rules :
    // cannot use counter variable
    // cannot use size function

// method : create slow and fast variables
    // slow moves one node at a time
    // fast moves two nodes at a time
    // if fast has two nodes in front of it
        // keep moving both vars
    // if there aren't
        // the node at slow is the mid node

function midpoint(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;

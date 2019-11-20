// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// input : linked list
// output : bool
// objective : Return true if linkedlist is circular
// method : Iterate through linkedList
    // keep list of visited nodes
    // if the node that we are visiting next is in the
    // list of visited nodes
        // return true
    // if you go through entire list
        // return false

function circular(list) {
    // create visitedNode var
    // create node var that starts at head
    // go through nodes using for loop
        // before entering each node, check if it's in visitedNodes
        // if it is, return true
    // return false
    let visited = [];
    let node = this.head;

    while (node) {
        if (visited.includes(node.next)) {
            return true;
        }
        visited.push(node); 
        node = node.next;
    }

    return false;
}

module.exports = circular;

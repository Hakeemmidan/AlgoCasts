// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }

    insert(data) {
        // start at root
        // if data is >= current node's data
            // go right
                // if null
                    // push new Node to current node's children
        // else
            // go left
                // if null
                    // unshift new Node to current node's children

        let currentNode = this;
        while (currentNode) {
            if (data >= currentNode.data) {
                if (currentNode.right === null) {
                    currentNode.right = new Node(data);
                    return
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                if (currentNode.left === null) {
                    currentNode.left = new Node(data);
                    return
                } else {
                    currentNode = currentNode.left;
                }
            }
        }
    }

    contains(num) {
        let currentNode = this;
        while (currentNode) {
            if (num === currentNode.data) {
                return currentNode;
            } else if (num > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return null;
    }
}

module.exports = Node;

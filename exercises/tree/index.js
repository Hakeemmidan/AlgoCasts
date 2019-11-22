// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    // constructor(arg)
        // data : arg
        // children : []
    // add
    // remove

    constructor(arg) {
        this.data = arg;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data)
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        // create arr that initially has head in it
        // while there are elements in the array
            // remove first element
            // apply function to first element
            // get all its children and concat them to the end of array
        
        let nodes = [this.root];
        let firstEl;
        while (nodes.length) {
            firstEl = nodes.shift();
            fn(firstEl);
            nodes = nodes.concat(firstEl.children);
        }
    }
}

module.exports = { Tree, Node };

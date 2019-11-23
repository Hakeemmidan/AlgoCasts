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
        let nodes = [this.root];
        let firstEl;
        while (nodes.length) {
            firstEl = nodes.shift();
            fn(firstEl);
            nodes = nodes.concat(firstEl.children);
        }
    }

    traverseDF(fn) {
        // go to root
        // get all its children
        // see the first child's children
        // go into the first child
        // keep doing this until you reach null
        //   [a]
        // [a,b,c]
        let nodes = [this.root];
        let firstEl;
        while (nodes.length) {
            firstEl = nodes.shift()
            fn(firstEl)
            nodes = firstEl.children.concat(nodes)
        }
    }
}

module.exports = { Tree, Node };

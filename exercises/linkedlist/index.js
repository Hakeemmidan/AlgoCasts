// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(nodeData) {
        if (this.head) {
            // inserted node . next 
                // => old node
            const newNode = new Node(nodeData);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = new Node(nodeData)
        }
    }

/*
    insertLast(nodeData) {
        if (!this.head) {
            this.head = new Node(nodeData)
        }

        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        node.next = new Node(nodeData)
    }
*/

    insertLast(nodeData) {
        let lastNode = this.getLast()

        if (lastNode) {
            lastNode.next = new Node(nodeData)
        } else {
            this.head = new Node(nodeData)
        }
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++
            node = node.next
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null
        let node = this.head;

        while (node.next) {
            node = node.next
        }

        return node
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // set the head to be equal to next of current head
        if (!this.head) return
        this.head = this.head.next;
    }

    /*
    removeLast() {
        // set next of the beofre last node to null
        if (this.size() < 2) {
            this.head = null;
            return
        }
        
        let node = this.head;
        while (node.next.next) {
            node = node.next
        }

        node.next = null;
    }
    */

    removeLast() {
        if (!this.head) {
            return
        }

        if (!this.head.next) {
            this.head = null;
            return
        }

        let previous = this.head;
        let current = this.head.next;

        while (current.next) {
            previous = current
            current = current.next
        }

        previous.next = null;
    }
    
    getAt(idx) {
        // get node at specified index
        // use counter to get to speciifed index
        // if out of range, retunr null
        let counter = 0;
        let node = this.head;

        while (counter < idx) {
            if (node === null) return null;
            node = node.next;
            counter++;
        }

        return node;
    }

    removeAt(idx) {
        if (!this.head) {
            return
        }

        if (idx === 0) {
            this.head = this.head.next
            return
        }

        if (idx >= this.size()) {
            return
        }

        let previous = this.getAt(idx - 1)

        previous.next = previous.next.next
    }

    insertAt(nodeData, idx) {
        let newNode = new Node(nodeData);

        if (!this.head && idx === 0) {
            this.head = newNode
            return
        }

        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let previous = this.getAt(idx - 1);

        if (!previous || !previous.next) {
            this.insertLast(newNode)
            return
        }

        newNode.next = previous.next
        previous.next = newNode
    }
}

module.exports = { Node, LinkedList };

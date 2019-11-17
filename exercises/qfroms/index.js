// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
// queue fifo
    // add => adds to top
    // remove => removes from bottom
// stack
    // add => add to top
    // remove => remove from top

// input  : N/A
// output : N/A
// objective : create a queue class using two stacks

class Queue {
    // constructor
        // stack A
        // stack B
        // the data is going to be contained within these two stacks
    
    // add
        // unshift stack A
    
    // remove
        // until stack A is empty (peek to see if there is anything there)
            // shift  each item from stack A and unshfit it to stack B
        // shift first item, save it in a variable
        // until stack B is empty 
            // shift each item from stack B and unshift it to stack B
        // return saved var
    
    // peek
        // do what you did in remove but instead of removing var, just peek into it, and save in var
    
    constructor() {
        this.sA = new Stack();
        this.sB = new Stack();
    }

    add(item) {
        this.sA.push(item)
    }

    remove() {
        // e.g.
        // a : [1,2]
        // b : []
        
        while (this.sA.peek()) {
            this.sB.push(this.sA.pop())
        }
        // => b : [2,1]


        let deletedItem = this.sB.pop();
        // => deletedItem : 2
        // => b : [1]

        while (this.sB.peek()) {
            this.sA.push(this.sB.pop())
        }
        // a : [1]
        // b : []

        return deletedItem;
        // => 2
    }

    peek() {
        while (this.sA.peek()) {
            this.sB.push(this.sA.pop())
        }

        let peekedItem = this.sB.peek();

        while (this.sB.peek()) {
            this.sA.push(this.sB.pop())
        }

        return peekedItem;
    }
}

module.exports = Queue;

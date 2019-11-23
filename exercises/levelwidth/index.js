// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// intput : node
// output : array
// objective : find the number of elements at each level starting
    // at the first given node

// method : count number of children getting pushed to our array
function levelWidth(root) {
    let nodes = [root];
    let levels = [1];
    // create a root array
    // create a levels array
    // push children of root to nodes
    // and push length of children at levels
    // create counter variable, it should be equal to
        // levels last element
            // (3 from example)
    // each iteration in while loop will decrease variable by one
    // when it's zero
        // push length of current nodes to levels
            // it should reset variable as well
    // return levels
    let counter = 0;

    while (nodes.length) {
        let firstEl = nodes.shift();
        nodes.push(...firstEl.children)
        if (counter === 0) {
            levels.push(nodes.length)
            counter = levels[levels.length - 1]
        }
        counter--
    }
    
    return levels.slice(0, levels.length - 1);
}

module.exports = levelWidth;

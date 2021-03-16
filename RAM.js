class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(rootNode) {
        this.root = rootNode;
        this.count = 1;
    }

    contains(value) {
        //Check whether the value is greater than or less than the current value of the node
        //Traverse the BST, while determining left or right.
        //If the no nodes are returned then return false. Else return true.

        let currentNode = this.root;
        
        while(currentNode !== null) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                }
            } else if (value > currentNode.value) {
                if (currentNode.right !== null ) {
                    currentNode = currentNode.right;
                }
            }
        }

        return false;
    }

    dfsInOrder() {
        // left, root, right;
        let results = [];

        const traverseTree = node => {
            if (node.left !== null) {
                traverseTree(node.left);
            }

            results.push(node);

            if (node.right !== null) {
                traverseTree(node.right);
            }
        }

        traverseTree(this.root);

        return results;
    }

    dfsPreOrder() {
        //root , left, right:

        let results = [];

        const traverseTree = node => {
            results.push(node);

            if (node.left !== null) {
                traverseTree(node.left);
            }

            if (node.right !== null) {
                traverseTree(node.right);
            }
        }

        traverseTree(this.root);

        return results;
    }

    bfs() {
        //Implement a queue:

        let results = [];
        let queue = [];

        queue.push(this.root);

        while (queue.length !== 0) {
            let currentNode = queue.shift();

            results.push(currentNode);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        return results;
    }
}


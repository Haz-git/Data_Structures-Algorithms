/* 
    Pattern for representing Binary Heaps as an array:
    
    n = parent's index;
    2n + 1 = node's left children;
    2n + 2 = node's right children;

    For example, if the parent node is at position 0, then the right child will be at position 2 and the left child will be at position 1.
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    add(element) {
        //Add new element to very end of array. Grab the new element's index and the item itself.
        this.values.push(element);
        let index = this.values.length - 1;
        const current = this.values[index];

        while (index > 0) {
            //Use the reverse of equation for finding children to find the newly added node's parent.
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            
            if (parent <= current) {
                //If the parent is less than or equal to the current, then we swap their positions.
                this.values[parentIndex] = current;
                this.values[index] = parent;

                //We set the index as parentIndex, because that's where our newly added node is now. Remember we want to 'bubble up' the heap.
                index = parentIndex;
            } else break;
        }
    }

    extractMax() {
        //Get current max value, and replace the current max value with the smallest. Or in min heap's case, replace with largest...
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        //Create the starting index of the replacement node, which should be at 0 at the start of the array. We will also grab this node.
        let index = 0;
        const length = this.values.length;
        const current = this.values[0];

        //Create infinite loop:
        while(true) {

            //Find the left and right children from index... we will now proceed to 'sink down' and fix the heap.
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            //Create the variables for left child and right child, as well as swap.

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                //If the leftChildIndex is greater than index, we shouldn't process this because rangeError.

                leftChild = this.values[leftChildIndex];
                if (leftChild > current) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];

                if ((swap === null && rightChild > current) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            //At this point, swap can only be a leftChild or a rightChild
            if (swap === null) break; 
            //If a break occurs, then both leftChildIndex and rightChildIndex are out of Range.

            //Swapping
            this.values[index] = this.values[swap];
            //The value at [index] is replaced with the value at [swap], so a left or right child
            this.values[swap] = current;
            //Then the value at [swap] is replaced with the replacement node;
            index = swap;
            //Finally, the index number is set to the swap number (new position);
        }

        return max;

    }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.add(45);
maxHeap.add(12);
maxHeap.add(8);
maxHeap.add(7);
maxHeap.add(3);
console.log(maxHeap)

console.log(maxHeap.extractMax());

console.log(maxHeap);

// let myArray = [];
// myArray.push('a');
// myArray.push('b');

// myArray[0] = myArray[1];

// console.log(myArray)

console.log (4 < 4)
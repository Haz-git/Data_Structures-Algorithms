/*
    Big - O:
    Length of runtime as 'x' becomes greater (towards infinity).
    BON expresses runtime in terms of 'n'.
    1. How quickly runtime grows..
    2. Relative to input...
    3. Input can get arbitrarily large...

    O(1) - Constant Time --> meaning that no matter how large the input grows, the time is still constant.
    O(n) - Linear Time --> Depending on the input, the run time scales linearly.
    O(n^2) - Quadratic Time --> Depending on the input, the run time scales quadraticly (pretty much exponential)
    
    Constants are not very important in relation to BON because as input becomes infinitely large, constants become less and less impactful.

    Worst case: This is usually the predicted BON.
    Best case: This is usually a constant time under certain conditions (may be very lucky circumstances).

    Space Complexity: Memory allocation --> Usually in the perspective of having a certain memory limit.

    
*/

//O(n)

const linearTimeFunc = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

linearTimeFunc();

//O(1)

let myArray = [];

myArray.push(1);

console.log(myArray);

//O(n^2)

const quadTimeFunc = () => {
    //nested for loop:
    for (let x = 0; x < 12; x++) {
        for (let j = 0; j < x; j++) {
            console.log(x, j);
        }
    }
}

quadTimeFunc();

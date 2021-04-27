const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

const merge = (arr1, arr2) => {
    //Create array holder for result.
    let sorted = [];
  
    while (arr1.length && arr2.length) {
        //While arr1 and arr2 are not empty...

        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        //If the first item of arr1 is smaller than that of arr2, we push arr1 item into the sorted array and shift() it out.  

        else sorted.push(arr2.shift());
        //otherwise, we push arr2's item in first.
    };

    //We return this weird .slice().concat() structure because if we have anything leftover, such as when the two arrays are not of the same length...we simply concat it to the end.

    console.log(arr1.slice());
    console.log(arr2.slice());

    //Here we see that [8] is left out because the while loop was broken, arr1's length did not equal to arr2's length.
    //Using slice() we generate a shallow copy of the arr passed in.
    //You see that arr1 is concatenating arr2, but arr2 is empty, so 8 is left to be added.

    console.log(arr1.slice().concat(arr2.slice()))
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
};

console.log(merge([1,8], [5]));

const mergeSort = arr => {
    //Base condition for stopping recursive function...return the arr when length is equal or less than 1.
    if (arr.length <= 1) return arr;

    //Calculate the middle and slice the array to left and right, store the left and right to save the data.
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        //Slice all of the left sides...
        right = mergeSort(arr.slice(mid));
        //Slice all of the right sides...

    //Use merge to build back up, sorting along the way...
  
    return merge(left, right);
};

console.log(mergeSort(unsortedArr));

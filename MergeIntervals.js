const merge = intervals => {
    //Base case: If there is a single interval, we'll just return that.
    if (intervals.length < 2) return intervals;

    //We'll sort the nested arrays inside intervals by the first item in each nested array.
    intervals.sort((a,b) => a[0] - b[0]);

    console.log(intervals);

    //Loop through the entirety of intervals
    //Notice how this for loop enables us to skip the first interval, since the first interval will not working using the following logic.
    for (let i = 1; i < intervals.length; i++) {

        //Define your current and previous intervals
        current = intervals[i];
        prev = intervals[i - 1];
        
        //This conditional checks the current's first number is less than or equal to the previous's last number (merging range). Using the CLG above, 2 < 3, so we have an overlapping interval.
        if (current[0] <= prev[1]) {
            //prev[0] = 1, current[0] = 2
            //prev[1] = 3, current[1] = 6
            //intervals[i] = [1, 6]
            intervals[i] = [Math.min(prev[0], current[0]), Math.max(prev[1], current[1])];

            //Now that you have created a merged interval in the correct position of the array, you have to delete the previous interval that you've merged with. It's still there!
            console.log(intervals);
            intervals.splice(i-1, 1);
            console.log(intervals);

            //Now that you've spliced out the previous interval, you must take into account that your array is now one interval shorter. Account for this by decrementing i. If you don't, the next loop i will be 2, and we'll move onto [15,18]--skipping [8,10]!
            console.log(i);
            i--;
        }
    }

    return intervals;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals));
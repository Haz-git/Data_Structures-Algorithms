const merge = intervals => {
    //Base case: If there is a single interval, we'll just return that.
    if (intervals.length < 2) return intervals;

    //We'll sort the nested arrays inside intervals by the first item in each nested array.
    intervals.sort((a,b) => a[0] - b[0]);


}
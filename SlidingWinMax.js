const maxSlidingWindow = (nums, k) => {
    const deque = []; //Store indices, we can get elements from indices.
    const results = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        while (deque && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();
        console.log(deque)
        
        deque.push(i);

        console.log(deque)

        console.log(deque[0], i - k)
        
        //Remove first element if outside window. 
        if (deque[0] === i - k) deque.shift();

        console.log(deque)
        
        //If window has k elements add to results
        //The first k - 1 windows have < k elements because we start from empty window and add 1 element per iteration
        console.log(i, k - 1)
        if (i >= k - 1) results.push(nums[deque[0]]);

        console.log(deque);

        console.log(results);
        
    }
    
    return results;
};

let nums = [1,3,-1,-3,5,3,6,7], k = 3;

console.log(maxSlidingWindow(nums, k))
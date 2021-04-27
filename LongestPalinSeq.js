const longestPalindrome = (s) => {
    if (s.length < 1) return '';
    //Base case, can't return anything if there isn't anything.

    let maxSubStart = 0;
    let maxSubLength = 0;
    //Necessary are using s.substr method. Parameter 1 is the starting index, parameter 2 is substr length.

    for (let i = 0; i < s.length; i++) {
        //Remember, centers include characters and spaces:
        const lengthCenteredAtChar = expandAroundCenter(s, i, i);
        const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);

        //Find the largest substring between the substring with a center on the char or a substr with a center on the follwing space.
        const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace);

        //We want to find the longest substr in this string. So we compare it to previously stored longest substring. We'll replace it if the new one is bigger.
        if (longestSubAtChar > maxSubLength) {
            maxSubLength = longestSubAtChar;
            maxSubStart = i - Math.floor((maxSubLength - 1) / 2);

            //For maxSubStart, We have to use maxSubLength - 1 to account for even substrs. Then we substract i because i represents the number of items we have already crossed.
        }
    }
    return s.substr(maxSubStart, maxSubLength);

}

const expandAroundCenter = (s, left, right) => {
    //Create the while loop conditional:

    //The boundaries of left and right should never be surpassed. Then, well, they have to equal eachother to be palindromic.
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        //All we want to do inside here is to expand the left and right. That is, the left goes smaller while the right grows larger. Think expanding! Left moves left. Right moves right.
        left--;
        right++;
    }
    // When this conditional breaks, either because s ran out of letters or that the substring is no longer the palindrome, we return the distance between left and right (-1 for index);

    return right - left - 1;
}
const numIslands = (grid) => {
    let count = 0;

    const depthSearch = (row, column) => {

        //Base case and recursive break: if the grid at this row and column # is equal to 1, we set the value to 'O' and return.
        if (grid[row][column] === '1') {
            grid[row][column] = '0';
        } else {
            return;
        }
        /*
            Conditionals: We are checking the vertical and horizontal directions of the target element:

            1. Each row at the same column # is searched for 1's. This searches and replaces all 1's in the bottom direction.
            2. Each column (or element) in a row is searched for 1's. This searchs and replaces all 1's in the right direction.
            3. After making sure that (A) this isn't the topmost row, and (B) this row is inside grid-- We search in the top direction.
            4. After making sure that (A) this isn't the first column, and (B) this column is inside row-- We search in the left direction.


        */
        if (row < grid.length - 1) depthSearch(row + 1, column);
        if (column < grid[row].length - 1) depthSearch(row, column + 1);
        if (row > 0 && row < grid.length) depthSearch(row - 1, column);
        if (column > 0 && column < grid[row].length) depthSearch(row, column - 1);
    }

    //i represents the row (nested arrays)
    //j represents the column (elements within nested array)

    //We want to search every element within the matrix:

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                //We count at the first 1, because no matter what there will be one island atleast.
                count++;
                depthSearch(i,j);
            }
        }
    }

    return count;
}
// First write the swap function, which is just a helper function to swap values of the array.
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function quicksortHoare(array, left, right) {
    // left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
    left = left || 0;
    right = right || array.length - 1;

    var pivot = partitionHoare(array, left, right);

    if (left < pivot - 1) {
        quicksortHoare(array, left, pivot - 1);
    }

    if (right > pivot) {
        quicksortHoare(array, pivot, right)
    }

    return array;

}

function partitionHoare(array, left, right) {
    var pivot = Math.floor((left + right) / 2);

    while (left < right) {
        while (array[left] < array[pivot]) {
            left++
        }
        while (array[right] > array[pivot]) {
            right--
        }

        if (left <= right) {
            swap(array, left, right);
            left++
            right--
        }
    }
    return left;
}
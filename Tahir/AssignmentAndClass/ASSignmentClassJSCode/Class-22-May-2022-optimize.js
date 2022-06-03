//array = [1, 2, 3, 4, 5, 10, 10]
array = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 6, 7, 9, 2, 7, 10, 9]
function showMessage(message, value) {
    console.log(message, value)
}
function removeValues(array, index) {
    for (k = 0; k < index.length; k++) {
        array.splice(index[k], 1)
        //showMessage("Remove value from index ", k)
        showMessage("Remove value at index of Array ", index[k])
        //showMessage("Remove value at index of Array ", index[k])
        showMessage("Array After Remove   ", array)
        showMessage("index Array After Remove   ", index)
        for (l = k + 1; l < index.length; l++) {
            showMessage("L::", l)
            index[l] = index[l] - 1
        }
        showMessage("index Array After update   ", index)

    }
}
function findDup(array) {
    count = 0;
    index = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count += 1;
                if (count > 1) {
                    index.push(j)
                    showMessage("count j value", j)
                    showMessage("count in index j value", index)
                }
            }
        }

        showMessage("After finding indexes of duplicate values::", array)
        removeValues(array, index)
        count = 0
        index = [];

    }
    showMessage("Final Array -------", array)
}



findDup(array)
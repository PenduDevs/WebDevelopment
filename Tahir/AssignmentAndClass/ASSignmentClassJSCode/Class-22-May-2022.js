//array = [1, 2, 3, 4, 5, 10, 10]
array = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 6, 7, 9, 2, 7, 10, 9]

function findDup(array) {
    count = 0;
    index = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count += 1;
                if (count > 1) {
                    index.push(j)
                    console.log("count j value", j)
                    console.log("count in index j value", index)
                }
            }
        }

        console.log(array)
        for (k = 0; k < index.length; k++) {
            array.splice(index[k], 1)
            //console.log("Remove value from index ", k)
            console.log("Remove value at index of Array ", index[k])
            console.log("Array After Remove   ", array)
            console.log("index Array After Remove   ", index)
            for (l = k + 1; l < index.length; l++) {
                console.log("L::", l)
                index[l] = index[l] - 1
            }
            console.log("index Array After update   ", index)

        }
        count = 0
        index = [];

    }
    console.log("Final Array -------", array)
}



findDup(array)
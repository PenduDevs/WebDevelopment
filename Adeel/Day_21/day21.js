// Write a function to check if given number is repeated twice in the array

function isRepeatedTwice(array, num) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            count++;
        }
    }
    return count == 2;
}
console.log(isRepeatedTwice([1,2,,2,3,3,3,10,10,10],2));

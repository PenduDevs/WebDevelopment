//Day 19 assignments 
//1. Write a JavaScript function to get the first element of an array. 
function sendFirst(a) {
    return a[0];
}
//sendFirst([1, 2, 3])
//1

//2. Print array in reverse order
function printReverse(a) {
    for (i = a.length; i > 0; i--) {
        console.log(a[i])
    }
}

//printReverse([4, 3, 2, 1])

//3. Write a JavaScript function to check if give value is in the array
function hasValue(array, value) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}

// sample input 
//hasValue([1, 2, 3, 4], 4)
// output: true


//4. Write a JavaScript function to clean the array(Remove empty values from array), return another array with clean values. 

//cleanNames(["hello", "world", "", " black panther"])
//["hello", "world", "black panther"]

function cleanNames(a) {
    for (i = 0; i < a.length; i++) {
        if (a[i] == "") {
            a.splice(i, 1);
        }
    }
    return a;
}
const a = new Array("hello", "world", "", " black panther")
//cleanNames(a);


//5. Write a JavaScript function that print values that are greater than 5.
function printGreator(array, num) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > num) {
            console.log(array[i]);
        }
    }
}

//sample call
//printGreator([1, 2, 3, 4, 10], 5)
//output: 10


//6. Write a JavaScript function to clone an array in reverse order

function cloneReverse(a) {

    for (i = 0, j = a.length - 1; i < a.length, j >= 0; i++, j--) {

        if (i < a.length / 2) {
            console.log(a[i], " before swap ", a[j]);
            var temp = 0;
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            console.log(a[i], " after ", a[j]);

        }


    }
    console.log("-------Answer--------")
    for (k = 0; k < a.length; k++) {
        console.log(a[k]);
    }
}

//cloneReverse([1, 2, 3, 4])
//[4, 3, 2, 1]


//Optional, but good to have. 
/*
Write these pattrens

*
**
***
****
*****
******
*/
function left_pyramid(height) {
    for (i = 0; i < height; i++) {
        for (j = 0; j <= i; j++) {
            process.stdout.write('*');
        }
        process.stdout.write("\n");
    }
}
//left_pyramid(10);
/*

*******
******
*****
****
***
**
*
*/
function inverse_left_pyramid(height) {
    for (i = 0; i < height; i++) {
        for (j = 0; j < height - i; j++) {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }
}
//inverse_left_pyramid(6);
/*
1-1
12-3
123-6
1234-10
12345-15
123456-21
*/
function number_pyramid(height) {
    for (i = 0; i < height; i++) {
        var sum = 0;
        for (j = 0; j <= i; j++) {
            process.stdout.write(`${j + 1}`);
            sum += j + 1;
        }
        process.stdout.write('-');
        process.stdout.write(`${sum}`);
        process.stdout.write('\n');
    }
}
number_pyramid(10);
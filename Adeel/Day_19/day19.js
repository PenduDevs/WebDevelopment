// 1. Write a JavaScript function to get the first element of an array.

function sendFirst(array) {
  console.log(array[0]);
}

// 2. Print array in reverse order

function printReverse(array) {
  for (let i = array.length; i >= 0; i--) {
    console.log(array[i]);
  }
}

// 3. Write a JavaScript function to check if given value is in the array.

function hasValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }
  return false;
}

// 4. Write a JavaScript function to clean the array(Remove empty values from array), return another array with clean values.

function RemoveSpace(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != "" && array[i] != " ") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// 5. Write a JavaScript function that print values that are greater than 5.

function printGreater(array, number) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(array[i]);
    }
  }
}

// 6. Write a JavaScript function to clone an array in reverse order

function cloneReverse(a) {
  Array = [];
  for (i = a.length - 1; i >= 0; i--) {
    Array.push(a[i]);
  }
  return Array;
}

// *
// **
// ***
// ****
// *****
// ******

function pattern1(number) {
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= i; j++) {
      process.stdout.write(`*`);
    }
    process.stdout.write("\n");
  }
}

// *******
// ******
// *****
// ****
// ***
// **
// *

function pattern2(number) {
  for (var i = 1; i <= number; i++) {
    for (var j = i; j <= number; j++) {
      process.stdout.write(`*`);
    }
    process.stdout.write("\n");
  }
}

function pattern3(number) {
  var sum = 0;
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    sum += i;
    process.stdout.write(`-${sum}\n`);
  }
}

pattern3(10);




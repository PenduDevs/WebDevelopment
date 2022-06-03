/*
//1
function printReverse(a) {
  for (i = a.length - 1; i >= 0; i--) {
    console.log(a[i])
  }

}

printReverse([4, 3, 2, 1])
  * /
/*
//2
function sendFirst(a) {
  console.log(a[0])
}
*/
//Write a JavaScript function that print values that are greater than 5.
/*
//3
function printGreator(array, num) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > num) {
      console.log(array[i])
    }
  }
}
printGreator([1, 2, 3, 4, 10], 5)
*/
/*
//4. Write a JavaScript function to check if give value is in the array
function hasValue(array, value) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true
    }
  }
  return false
}

// sample input 
hasValue([1, 2, 3, 4], 4)
// output: true
*/
/*
1
12
123
1234
12345
123456
*/
/*
function print(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      process.stdout.write(j + 1)
    }
    process.stdout.write("\n");
  }
}
print(8)
*/

//5 fixed by naveed
function print(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      process.stdout.write(String(j + 1))
    }
    process.stdout.write("\n");
  }
}

print(8)

/*
lines = ["*", "+", "-", "?", "$", "#", "@", "&"]
for (i = 0; i < lines.length; i++) {
  for (j = 0; j <= i; j++) {
    process.stdout.write(lines[i]);
  }
  process.stdout.write("\n");
}
*/







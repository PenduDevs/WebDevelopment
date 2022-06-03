const inputString = document.querySelector('#formGroupExampleInput');
const inputOp = document.querySelector('#formGroup')

const cta = document.querySelector('#btn')
const output = document.querySelector('#output')
const alert = document.querySelector('#alert');

function split(string, splitChar) {
  console.log("String befer split:::", string)
  console.log("String after split:::", string.split(splitChar))
  return string.split(splitChar)
}

function numberExist(arr, number) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return true
    }
  }

  return false;
}


function findDup(array) {
  var result = [];
  var tmp = [];

  var array = array.filter(function (el) {
    return el != "";
  });
  console.log("Array in finddup remove empty:::", array)
  for (var i = 0; i < array.length; i++) {
    num = array[i]

    if (numberExist(tmp, num)) {
      if (!numberExist(result, num))
        result.push(num)
    } else {
      tmp.push(num);
    }
  }

  return result;
}


function findDupWithHash(arr) {
  var hash = {}
  var result = {}

  for (i = 0; i < arr.length; i++) {
    num = arr[i]

    if (hash[num]) {
      result[num] = true;
    } else {
      hash[num] = true;
    }
  }
  output.innerHTML = join(arr, op)

  return Object.keys(result);
}

function join(array, char) {
  var tmp = array[0]

  for (var i = 1; i < array.length; i++) {
    tmp += char + array[i];
  }

  return tmp;
}

function showResult(result) {
  if (result.length > 0) {
    output.innerHTML = join(result, inputOp.value);
    alert.classList.remove('alert-danger');
    alert.classList.add('alert-success')
  }
  else
    output.innerHTML = "No duplicate value found."
}

function showError(error) {
  alert.classList.remove('alert-info')
  alert.classList.add('alert-danger');
  output.innerHTML = error;
}

cta.addEventListener("click", function () {
  debugger
  if (!isEmptyInputString(inputString.value) && !isEmptyInputOp(inputOp.value)) {
    debugger
    const array = split(inputString.value, inputOp.value);
    console.log("Array after split:::", array)
    const duplicateNumebers = findDup(array);
    showResult(duplicateNumebers)
  }

});
function isEmptyInputString(inputString) {
  if (inputString == "") {
    showError("Enter Value")
    return true;

  }
  return false;
}
function isEmptyInputOp(inputOp) {
  if (inputOp == "") {
    showError("Enter Operator")
    return true;

  }
  return false;
}


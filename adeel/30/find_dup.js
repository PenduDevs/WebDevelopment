const inputString = document.querySelector('#formGroupExampleInput');
const inputop = document.querySelector('#formGroup')

const cta = document.querySelector('#btn')
const output = document.querySelector('#output')
const alert = document.querySelector('#alert');
const Resetbutton = document.querySelector('#btnReset');

function split(string, splitChar) {
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


function join(array, char) {
    var tmp = array[0]

    for (var i = 1; i < array.length; i++) {
        tmp += char + array[i];
    }

    return tmp;
}

function showResult(result) {
    if (result.length > 0) {
        output.innerHTML = join(result, inputop.value);
        alert.classList.remove('alert-danger')
    } else {
        showError("No duplicates found");
    }

    if (inputString.value == '') {
        showError('Please enter a string');
    }
    if (inputop.value == '') {
        showError('Please enter an operator');
    }

}

function showError(error) {
    alert.classList.remove('alert-info')
    alert.classList.add('alert-danger');
    output.innerHTML = error;
}

cta.addEventListener("click", () => {
    const array = split(inputString.value, inputop.value);
    const duplicateNumebers = findDup(array);
    showResult(duplicateNumebers)
});

Resetbutton.addEventListener('click', function () {
    inputString.value = '';
    inputop.value = '';
    output.innerHTML = '';
    alert.classList.remove('alert-danger')
});


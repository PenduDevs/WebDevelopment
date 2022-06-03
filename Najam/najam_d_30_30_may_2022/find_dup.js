const inputString = document.querySelector('#formGroupExampleInput');
const inputOp = document.querySelector('#formGroup')

const cta = document.querySelector('#btn')
const output = document.querySelector('#output')
const result = document.querySelector('#result')

function split(string, splitChar){
  return string.split(splitChar)
}

function validateInputs(){
  if(inputString.value == ''){
    addDangerClasses(result)
    output.innerHTML = 'Please enter a string'
    return false
  }
  if (inputOp.value == ''){
    addDangerClasses(result)
    output.innerHTML = 'Please enter a operator'
    return false
  }
  return true
}

function numberExist(arr, number){
  for(var i=0; i< arr.length; i++){
    if(arr[i] == number){
      return true
    }
  }
  
  return false; 
}

function addDangerClasses(result){
  result.removeAttribute('class');
  result.classList.add('alert')
  result.classList.add('alert-danger')
}

function addInfoClasses(result){
  result.removeAttribute('class');
  result.classList.add('alert')
  result.classList.add('alert-info')
}


function findDup(array){
  var result = [];
  var tmp = [];

  for(var i=0; i< array.length; i++){
    num = array[i]
    
    if(numberExist(tmp, num)){
      if(!numberExist(result, num))
        result.push(num)
    } else{
      tmp.push(num);
    }
  } 

  return result;
}


function findDupWithHash(arr){
  var hash = {}
  var result = {}
 
  for(i=0; i< arr.length; i++){
    num = arr[i]
    
    if(hash[num]){
      result[num] = true;
    } else{
      hash[num] = true;
    }
  }
  output.innerHTML = join(arr, op)

  return Object.keys(result);
}

function join(array, char){
  var tmp = array[0]

  for(var i=1; i< array.length; i++){
    tmp += char + array[i];
  }

  return tmp;
}

function showResult(result){
  if(result.length == 0){
    output.innerHTML = 'No Result found'
  }
  else
  {
    output.innerHTML = join(result, inputOp.value);
  }
}

cta.addEventListener("click", function(){ 
  if(validateInputs()){
  addInfoClasses(result)
  const array = split(inputString.value, inputOp.value);
  const duplicateNumebers = findDup(array);
  showResult(duplicateNumebers)
  }
});



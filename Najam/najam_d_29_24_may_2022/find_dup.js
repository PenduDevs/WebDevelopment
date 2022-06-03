const inputString = document.querySelector('#formGroupExampleInput');
const inputOp = document.querySelector('#formGroup')

const cta = document.querySelector('#btn')
const output = document.querySelector('#output')

function split(string, splitChar){
  return string.split(splitChar)
}

function numberExist(arr, number){
  for(var i=0; i< arr.length; i++){
    if(arr[i] == number){
      return true
    }
  }
  
  return false; 
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
  output.innerHTML = join(result, inputOp.value);
}

cta.addEventListener("click", function(){ 
  const array = split(inputString.value, inputOp.value);
  const duplicateNumebers = findDup(array);
  showResult(duplicateNumebers)
});



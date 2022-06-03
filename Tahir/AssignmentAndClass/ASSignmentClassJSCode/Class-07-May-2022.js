//Write a javascript function that return the biggest number in the array
/*
arr = new Array(1,2,3,4,5)
function biggest(array){
	biggest = 0
	for(i=0; i<array.length; i++){
		if(array[i] > biggest){
			biggest = array[i]
		}
	}
	return biggest
}

biggest(arr)
*/
/*
//by naveed
arr = [1,2,3,4,5]
function biggest(array){
	bigg = array[0]
	for(i=1; i<array.length; i++){
		if(array[i] > bigg){
			bigg = array[i]
		}
	}
	return bigg
}
biggest(arr)

*/
//Write a function to check if given number is repeated twice in the array

function isRepeated(array, num){
	repeat = 0
	for(i=0; i<array.length; i++){
		if(array[i] == num){
			repeat += 1
		}
	}
	if(repeat > 1)
	return true
    return false 
}


isRepeated([1,2,3,4,5,2], 2) 
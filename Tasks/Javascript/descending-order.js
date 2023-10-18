const arr1 = [53.6,12.6,33.5,6.4,59.9]; 
const arr2 = [20,10,5,9,7]; 

function arrSort(arr) { 
	arr.sort((a,b)=>b-a); 
	return arr; 
} 

console.log(arrSort(arr1)); 
console.log(arrSort(arr2));
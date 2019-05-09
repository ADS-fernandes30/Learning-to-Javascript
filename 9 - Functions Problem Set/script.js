//isEven

/*function isEven(num){
//return true if even
if(num % 2 === 0) {
	return true;
	} 
//return false otherwise
else {
	return false
	}
}
*/

//BEST SOLUTION!

function isEven(num){
	return num % 2 ===0;
}

//Factorial: Ex: 5! = 5 x 4 x 3 x 2 x 1 =120

function factorial(num){
	var result = 1;
	for(var i = 2; i <= num; i ++){
		result *= i;
	}
	return result;
}

// factoria(4) 4 x 3 x 2 x 1


// kebabToSnake



function kebabToSnake(str) {
// replace all "-" with "_" 's
var newStr = str.replace(/-/g , "_");
//return string
return newStr;
}
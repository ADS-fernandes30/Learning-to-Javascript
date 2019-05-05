//While Loops Problem Set

//1.Print all number between -10 and 19

console.log("Printing all numbers between -10 and 19")


for (var i = -10; i < 20; i++) {
	console.log(i);
}

/*var counter = -10;

while(counter <20) {
		console.log(counter);
		counter ++;
}
*/

//2.Print all even numbers between 10 and 40

console.log("Printing all even numbers between 10 and 40")

for (var i = 10; i <= 40; i+=1) {
	if(i % 2 === 0) {
	console.log(i);
	}
}



/*var counter = 10;

while(counter <40) {
		console.log(counter);
		counter +=2;
}
*/


//Another way but the first is better:
/* 

while(counter <=40) {
	if(counter % 2 === 0){
	console.log(counter);
	}
		counter +=1;
}*/


//3.Print all odd numbers between 300 and 333

console.log("Printing all odd numbers between 300 and 333")


for (var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
	console.log(i);
	}
}


/* for (var i = 300; i <=333; i+=1) {
	console.log(i);
}
*/




/*var counter = 300;

while(counter <=333) {
	if(counter % 2 !== 0){
	console.log(counter);
	}
	counter +=1;
}
*/



//4.Print all numbers divisible by 5 AND between 5 and 50

console.log("Printing all numbers divisible by 5 AND between 5 and 50")



for (var i = 5; i <= 50; i+=5) {
	if(i % 1 === 0) {
	console.log(i);
	}
}



/*var counter = 5;

while(counter <=50) {
	if(counter % 1 === 0){
	console.log(counter);
	}
	counter +=5;
}
*/

//5.Print all numbers divisible by 5 AND 3 between 5 and 50

console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50")


for (var i = 5; i <= 50; i++) {
	if(i % 5 === 0 && i % 3 ===0) {
	console.log(i);
	}
}



/*var counter = 5;

while(counter <=50) {
	if(counter % 5 === 0 && counter % 3 ===0){
	console.log(counter);
	}
	counter +=1;
}
*/
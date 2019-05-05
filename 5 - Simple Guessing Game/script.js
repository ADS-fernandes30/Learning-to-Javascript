//create a secret number

//var secretNumber = 4;

//ask user for guess

//var guess = prompt("Guess a number");


//check if guess is right

//if (guess === secretNumber) {
//	alert("YOU GOT IT RIGHT!");}

//First we have to verify the type pf the number! 
// typeof guess
//"string"

//2 solutions:
// 1st: guess = secretNumber
// 2nd: Number(guess) === seecretNumber *BEST SOLUTION!

//Number(guess) === seecretNumber

//Updating: check if guess is right

/*if (Number(guess) === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

check if guess is higher

else if(Number(guess) > secretNumber) {
	alert("Too high. Guess again!");
}

//Otherwise check if lower

else {
	alert("Too low. Guess again!");
}*/

//Improvement of the code 1:
/*var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");}

else if(guess > secretNumber) {
	alert("Too high. Guess again!");
}

//Otherwise check if lower

else {
	alert("Too low. Guess again!");
}*/

//Improvement of the code 2: "BEST SOLUTION"


//create a secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

//check if guess is higher
else if(guess > secretNumber) {
	alert("Too high. Guess again!");
}

//Otherwise check if lower

else {
	alert("Too low. Guess again!");
}
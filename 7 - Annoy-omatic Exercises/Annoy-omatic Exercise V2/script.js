/*
- Ask the user "Are we there yet"
- Keep asking again and again until they enter "yes" OR "yeah"
- Then, alert "Yay, we finally made it!" */

var answer = prompt ("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");
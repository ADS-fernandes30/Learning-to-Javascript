/*
- Ask the user "Are we there yet"
- Keep asking again and again until they enter "yes" OR "yeah"
- Then, alert "Yay, we finally made it!" */

var answer = prompt ("Are we there yet?");

while(answer !== "yes" && answer !== "yeah") {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");
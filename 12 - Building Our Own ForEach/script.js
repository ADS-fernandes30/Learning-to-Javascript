var colors = [ 'red', 'orange', 'yellow' ];

function myForEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

myForEach(colors, alert);

myForEach(colors, function(abc) {
	console.log(abc);
});

Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
};

var friends = [ 'charlie', 'dave', 'maddy', 'caitlin' ];

friends.myForEach(alert);

friends.myForEach(function(name) {
	console.log('I love ' + name);
});


var carMake = ['toyota','honda','ford','volkswagen', 'subaru'];
var rand = carMake[Math.floor(Math.random() * carMake.length)];
console.log(rand)

document.onkeyup = function(start){
	document.getElementById('unguessed').innerHTML = rand;
}
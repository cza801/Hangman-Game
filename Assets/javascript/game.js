
var carMake = ['toyota','honda','ford','volkswagen', 'subaru'];
var rand = carMake[Math.floor(Math.random() * carMake.length)];
console.log(rand)


document.onkeyup = function(start){

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var word;
    var space;
    var counter;
    var lives;

 
    
	 document.getElementById('unguessed').innerHTML = rand;
}
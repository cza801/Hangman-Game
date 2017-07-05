
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

// i think this belones in a function. But I was able to get this to work for now. 
    if (rand = 'toyota') {
    	document.getElementById('unguessed').innerHTML = '-';
    } else if (rand = 'honda') {
    	document.getElementById('unguessed').innerHTML = '-----';
    } else if (rand = 'ford') {
    	document.getElementById('unguessed').innerHTML = '----';
    } else if (rand = 'volkswagen') {
    	document.getElementById('unguessed').innerHTML = '---------';
    } else if (rand = 'subaru') {
    	document.getElementById('unguessed').innerHTML = '------';
    }
 	
 	// document.getElementById('guesses')onkeypress =
    
	 // document.getElementById('unguessed').innerHTML = rand;
}
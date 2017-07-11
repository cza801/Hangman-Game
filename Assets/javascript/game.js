var wordOptions = ['luffy', 'zoro', 'nami', 'usopp', 'sanji', 'chopper', 'robin', 'franky', 'brooke'];
var wrongGuesses = [];
var winCount = 0;
var guessesLeft = 15;
var chosenWord = "";
var lettersInWord = [];
var numberBlanks = 0;
var blanksAndSuccess = [];




//functions
function startGame() {
    // picking a random word from the word bank
    chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = chosenWord.split(""); 
    numberBlanks = lettersInWord.length;

    //Reset 
    guessesleft = 15;
    wrongGuesses = [];
    blanksAndSuccess = [];

    //getting the chosen word into dashes
    for (var i = 0; i < numberBlanks; i++) {
        blanksAndSuccess.push("_");
    }

    //writing out the chosen word onto the HTML
    document.getElementById('currentword').innerHTML = blanksAndSuccess.join(" ");
    document.getElementById('guessesleft').innerHTML = guessesLeft;
    document.getElementById('wins').innerHTML = winCount;

    //Testing and Debugging
    console.log(chosenWord)
    console.log(lettersInWord)
    console.log(numberBlanks)

}

function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i = 0; i < numberBlanks; i++){
        if(chosenWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if(isLetterInWord){
        for (var i = 0; i < numberBlanks; i++) {
            if(chosenWord[i] == letter) {
                blanksAndSuccess[i] = letter;

            }
        }
    }
}


//Main Process
startGame()


// document.onkeyup = function(event) {
//     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     checkLetters(letterGuessed)
// }








// var carMake = ['toyota','honda','ford','volkswagen', 'subaru'];
// var rand = carMake[Math.floor(Math.random() * carMake.length)];
// console.log(rand)


// document.onkeyup = function(start){

// 	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     var word;
//     var space;
//     var counter;
//     var lives;

// // i think this belones in a function. But I was able to get this to work for now. 
//     if (rand = 'toyota') {
//     	document.getElementById('unguessed').innerHTML = '-';
//     } else if (rand = 'honda') {
//     	document.getElementById('unguessed').innerHTML = '-----';
//     } else if (rand = 'ford') {
//     	document.getElementById('unguessed').innerHTML = '----';
//     } else if (rand = 'volkswagen') {
//     	document.getElementById('unguessed').innerHTML = '---------';
//     } else if (rand = 'subaru') {
//     	document.getElementById('unguessed').innerHTML = '------';
//     }
 	
//  	// document.getElementById('guesses')onkeypress =
    
// 	 // document.getElementById('unguessed').innerHTML = rand;
// }
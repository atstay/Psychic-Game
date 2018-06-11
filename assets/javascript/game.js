
// Array of alphabet letters for the user to choose from
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Global variables
var wins = 0;
var losses = 0;
var guessesLeft = 7;

// Array that will hold user's guesses
var guessesSoFar = [];

// What the user's selected so far
var userGuess = null;

// Randomly selected letters by computer
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// Game listens for user to press key
document.onkeyup = function(event) {

	// When user presses a key, it records it to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to guessesSoFar array but 
	// only if it wasn't already previously picked by the user
	// also make sure that the character user picks is within
	// the alphabet, and not any non-usable character
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
	}

	// if letterToBeGuessed is same as userGuess then record it as a win
	// and then reset guessesLeft to 7, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (letterToBeGuessed == userGuess) {
		wins++;
		document.getElementById('mario').play();
		window.alert ("You won! TAKE THESE GYPSY TEARS");
		guessesLeft = 7;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	}

	// if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 7, and empty the guessesSoFar array
	// also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		document.getElementById('cackle').play();
		window.alert ("You lost! GIVE ME YOUR TEARS");
		guessesLeft = 7;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	}

	// Displaying progress to HTML
    var html = 
    "<p><h1>The Psychic Gypsy Game</h1></p>" + 
    "<p><h4>Guess What Letter I\'m Thinking Of:</h4></p>" + 
    "<p><h4>Wins: " + wins + "</h4></p>" + 
    "<p><h4>Losses: " + losses + "</h4></p>" + 
    "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
    "<p><h4>Your Guesses So Far: " + guessesSoFar + "</h4></p>";
    "<br>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}

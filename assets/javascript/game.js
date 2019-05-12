//ADD ARRAY OF LETTERS
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var randomLetter =""
var winCount = 0
var lossCount = 0
var guessesLeft = 0 
var guessedLetters = []
var guessesLeft

//new game if guessed wrong
function newGame() {
    guessedLetters = [];
    resetGuesses();
    generateRandomLetter();

//key press
window.addEventListener("keypress", onKeyPress, false);
newGame();    

//im somewhat stuck at this point.....
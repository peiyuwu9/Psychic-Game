var guessChances = 13;
var guessLetter = [];
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;
var losses = 0;
var computerGuess;

var resetGame = function() {
    guessChances = 13;
    guessLetter = [];
    log();
    randomNumberGenerate();
}

var log = function() {
    document.getElementById("letters-text").textContent = "You guessed: " + guessLetter;
    document.getElementById("chances-text").textContent = "You have " + guessChances + " chances left.";
    document.getElementById("wins-text").textContent = "You win " + wins + " times.";
    document.getElementById("losses-text").textContent = "You loss " + losses + " times.";
}

var randomNumberGenerate = function() {
    computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
    console.log (computerGuess);
}

randomNumberGenerate();

document.onkeyup = function (event) {

    document.getElementById("direction-text").textContent = " ";

    var userGuess = event.key.toLocaleLowerCase();

    console.log (userGuess);
        
        if (guessChances > 0) {

            if (guessLetter.indexOf(userGuess) === -1) {
                
                guessLetter.push(userGuess);
            
                guessChances--;

                log();
            }
            
            if (event.which>64 && event.which <91) {

                if (userGuess === computerGuess) {
                    wins++
                    resetGame();
                };

            }

            else {
                alert ("Please press letter key!");
            }
            
        }

        else {

            if (losses < 2) {
                losses ++;
                wins = 0;
                resetGame();
            }

            else {
                alert ("Game Over!");
                losses = 0;
                wins = 0;
                resetGame();
             }
                    
        }
    
}
var guessChances = 10;
var guessLetter = [];
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;
var losses =0;

document.onkeyup = function (event) {

    document.getElementById("direction-text").textContent = " ";

    var userGuess = event.key.toLocaleLowerCase();

    console.log (userGuess);
        
        if (guessChances > 0) {
            
            guessLetter.push(userGuess);
            
            guessChances--;

            if ((userGuess==="a")||(userGuess==="b")||(userGuess==="c")||(userGuess==="d")||(userGuess==="e")||(userGuess==="f")||(userGuess==="g")||(userGuess==="h")||(userGuess==="i")||(userGuess==="j")||(userGuess==="k")||(userGuess==="l")||(userGuess==="m")||(userGuess==="n")||(userGuess==="o")||(userGuess==="p")||(userGuess==="q")||(userGuess==="r")||(userGuess==="s")||(userGuess==="t")||(userGuess==="u")||(userGuess==="v")||(userGuess==="w")||(userGuess==="x")||(userGuess==="y")||(userGuess==="z")) {
            
                var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
                
                console.log (computerGuess);

                if (userGuess === computerGuess) {wins++};

                document.getElementById("letters-text").textContent = "You guessed: " + guessLetter;
                document.getElementById("chances-text").textContent = "You have " + guessChances + " chances left.";
                document.getElementById("wins-text").textContent = "You win " + wins + " times.";
                document.getElementById("losses-text").textContent = "You loss " + losses + " times.";
            }

            else {
                alert ("Please press letter key!");
            }
        }

        else {
            var resetGame = function () {
                guessChances = 10;
                wins = 0;
                guessLetter = [];
                
                document.getElementById("letters-text").textContent = "You guessed: " + guessLetter;
                document.getElementById("chances-text").textContent = "You have " + guessChances + " chances left.";
                document.getElementById("wins-text").textContent = "You win " + wins + " times.";
                document.getElementById("losses-text").textContent = "You loss " + losses + " times.";
            }

            if (losses < 2) {
                var restart = confirm ("Do you want to play again?");
                losses ++;
                resetGame();
            }

            else {
                alert ("Game Over!");
                losses = 0;
                resetGame();
             }
                    
        }
    
}
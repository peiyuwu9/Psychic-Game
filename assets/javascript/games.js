var guessChances = 10;
var guessLetter = [];
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;

document.onkeyup = function (event) {

    document.getElementById("direction-text").textContent = " ";

    var userGuess = event.key.toLocaleLowerCase();

    console.log (userGuess);

    if ((userGuess==="a")||(userGuess==="b")||(userGuess==="c")||(userGuess==="d")||(userGuess==="e")||(userGuess==="f")||(userGuess==="g")||(userGuess==="h")||(userGuess==="i")||(userGuess==="j")||(userGuess==="k")||(userGuess==="l")||(userGuess==="m")||(userGuess==="n")||(userGuess==="o")||(userGuess==="p")||(userGuess==="q")||(userGuess==="r")||(userGuess==="s")||(userGuess==="t")||(userGuess==="u")||(userGuess==="v")||(userGuess==="w")||(userGuess==="x")||(userGuess==="y")||(userGuess==="z")) {
        
        if (guessChances > 0) {
            
            guessLetter.push(userGuess);
            
            guessChances--;
            
            var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
            
            console.log (computerGuess);

            if (userGuess === computerGuess) {wins++};

            document.getElementById("letters-text").textContent = "You guessed " + guessLetter;
            document.getElementById("chances-text").textContent = "You have " + guessChances + " chances left.";
            document.getElementById("wins-text").textContent = "You win " + wins + " times.";
        }

        else {
            document.getElementById("game-over").textContent = "Game Over!!";
        }
    }

    else {
        alert ("Please press letter key!");
    }
}
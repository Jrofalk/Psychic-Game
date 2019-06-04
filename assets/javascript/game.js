var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var win = 0;
var loss = 0;
var guess = 9;
var guessSelect = [];
    
document.onkeyup = function(event) {
    var userGuess = event.key;
    var choice = compGuess[Math.floor(Math.random() * compGuess.length)];
    var userInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
                 
    if (userInput.indexOf(userGuess) > -1) {

        if (userGuess === choice) {
            win ++;
            guess = 9;
            guessSelect = [];
        }

        if (userGuess != choice) {
            guess --;
            guessSelect.push(userGuess);
        }

        if (guess === 0) {
            guess = 9;
            loss ++;
            guessSelect = [];
    }

var userGuess = document.getElementById('user-guess');
var userWin = document.getElementById('user-win');
var userLoss = document.getElementById('user-loss');

function updateScore() {
    document.querySelector("#user-win").innerHTML = win;
    document.querySelector('#user-loss').innerHTML = loss;
    document.querySelector('#guess-count').innerHTML = guess;
    }

function updateGuess() {
    document.querySelector('#user-guess').innerHTML = guessSelect;
    }
        
updateScore();
updateGuess();
}
};

                
                        
                        
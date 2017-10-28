var inquirer = require('inquirer');
var Word = require('./main.js')

function initGame() {
    var newWord = new Word;

    function startGame() {

        inquirer.prompt([
            {
                type: "confirm",
                message: 'Welcome to Constructor Hangman!\n\n Would you like to play',
                name: "startPage"
            }
        ]).then(function (answers) {
            if (answers.startPage) {
                newWord.populateWord();
                chooseLetter();
            }
        });
    }

    function chooseLetter() {

        inquirer.prompt([
            {
                type: "input",
                message: '\nChoose a letter',
                name: "letterChoice"
            }
        ]).then(function (answers) {
            if (newWord.successAndBlank.indexOf("_") != -1 && newWord.guesses > 0) {
                newWord.checkLetter(answers.letterChoice);
                checkGameState();
            }
        });
    }

    function checkGameState() {
        if (newWord.successAndBlank.indexOf("_") != -1 && newWord.guesses > 0) {
            chooseLetter()
        } else {
            endGame()
        }

    }

    function endGame() {

        inquirer.prompt([
            {
                type: "confirm",
                message: '\nGame Over\nWould you like to play again?',
                name: "gameOver"
            }
        ]).then(function (answers) {
            if (answers.gameOver) {
                initGame()
            }
        });
    }

    startGame();
}

initGame()
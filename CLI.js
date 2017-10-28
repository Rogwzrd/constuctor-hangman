var inquirer = require('inquirer');
var Letter = require('./letter.js')

function initGame() {
    var newLetter = new Letter;

    function startGame() {

        inquirer.prompt([
            {
                type: "confirm",
                message: 'Welcome to Constructor Hangman!\n\n Would you like to play',
                name: "startPage"
            }
        ]).then(function (answers) {
            if (answers.startPage) {
                newLetter.populateWord();
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
            if (newLetter.successAndBlank.indexOf("_") != -1 && newLetter.guesses > 0) {
                newLetter.checkLetter(answers.letterChoice);
                checkGameState();
            }
        });
    }

    function checkGameState() {
        if (newLetter.successAndBlank.indexOf("_") != -1 && newLetter.guesses > 0) {
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
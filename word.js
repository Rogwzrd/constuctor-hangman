//1 create a constructor to hold word challenges and logic to produce it as a challenge with letters hidden
//2 create a constructor to hold letter iputs and logic to have it interact with the word constructor
//3 create inquirer code to take user input and produce feedback

var Word = function() {
    this.wordBank = ["hamburger", "cake", "pie", "bananas", "quiche", "lasagna", "hotdogs"];
    this.chosenWord = this.wordBank[Math.ceil(Math.random() * this.wordBank.length) - 1]
}

module.exports = Word;
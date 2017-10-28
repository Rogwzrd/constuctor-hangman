//1 create a constructor to hold word challenges and logic to produce it as a challenge with letters hidden
//2 create a constructor to hold letter iputs and logic to have it interact with the word constructor
//3 create inquirer code to take user input and produce feedback

var wordBank = ["hamburger", "cake", "pie", "bananas"];

var Word = function() {
    this.chosenWord = wordBank[Math.ceil(Math.random() * wordBank.length) - 1]
    this.unsolved = this.chosenWord.split("")
    this.guesses = this.unsolved.length + 5
    this.numBlanks = this.unsolved.length
    this.successAndBlank = []
    this.wrongGuess = []

    this.populateWord = function() {
        for (var i = 0; i < this.numBlanks; i++) {
            this.successAndBlank.push("_")
        }
        console.log(`\nThis is the current state of the unsolved word: ${this.successAndBlank.join((" "))}`)
    }

    this.checkLetter = function (letter) {
        if (this.unsolved.indexOf(letter) != -1 && this.successAndBlank.indexOf(letter) === -1) {
            for (var i = 0; i < this.successAndBlank.length; i++) {
                if (letter === this.unsolved[i]) {
                    this.successAndBlank.splice(i, 1, letter)
                }
            }
            console.log(`Great guess ${this.successAndBlank.join(" ")}`)
        } else if (this.wrongGuess.indexOf(letter) == -1 && this.successAndBlank.indexOf(letter) === -1) {
            this.wrongGuess.push(letter)
            this.guesses--
            console.log(`\nToo bad try another letter! \nYou have ${this.guesses} left.\nYou have already guessed these: ${this.wrongGuess.join(" ")}`)
        } else {
            console.log("You already guessed that letter")
        }

        if (this.successAndBlank.indexOf("_") == -1 ) {
            console.log("You Win!")
        }
    }
}

var Letter = function(x) {

    this.unsolved = newWord.chosenWord.split("")
    this.guesses = this.unsolved.length + 5
    this.numBlanks = this.unsolved.length
    this.successAndBlank = []
    this.wrongGuess = []

}



module.exports = Word;
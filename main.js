//1 create a constructor to hold word challenges and logic to produce it as a challenge with letters hidden
//2 create a constructor to hold letter iputs and logic to have it interact with the word constructor
//3 create inquirer code to take user input and produce feedback

var Word = function(wordCoice) {
    this.name = wordCoice;
    this.unsolved = this.name.split("");
}

var hamburgers = new Word("hamburgers");
console.log(hamburgers.unsolved)
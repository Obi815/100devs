// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
// Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Mountain Dew  "
// console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let favMovies = "rush hour fantastic 4 apple"

// console.log(favMovies.includes('apple') ? 'true' : 'false')

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps() {
    RockPaperScissors = ['rock', 'paper', 'scissors']

    let choose = RockPaperScissors[Math.floor(Math.random() * RockPaperScissors.length)]

    return choose

}

// console.log(rps())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) 
// and determines if they won a game of rock paper scissors against a bot using the above function



function checkWIn(choice) {
    let botChoice = rps()

    if ((choice === 'rock' && botChoice === 'scissors') ||
        (choice === 'paper' && botChoice === 'rock') ||
        (choice === 'scissors' && botChoice === 'paper')) {
        console.log('you win')
    } else if (choice === botChoice) {
        console.log('You tied')
    } else {
        console.log('You Lose')
    }
}
// checkWIn('paper')
//*Loops*
//Create a function that takes an array of choices. 
// Play the game x times where x is the number of choices in the array. 
// Print the results of each game to the console.

function playGameXTimes(arr) {
    arr.forEach(choice => checkWIn(choice));
}

playGameXTimes(['rock', 'paper', 'scissors'])
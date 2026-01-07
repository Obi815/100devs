// *Variables*
// Declare a variable and assign it to a sentance as a string. 
// Alert if the sentance is a question

// let sentance = "Is this a string?";
// if (sentance.endsWith("?")) {
//     alert("true");
// }

//Declare a variable, assign it a string of multiple words, 
// replace every "jr. dev" with "software engineer", 
// and print it to the console

// let multiWordString = "I am a jr. dev at a company. Another jr. dev works here.";
// let newString = multiWordString.replaceAll("jr. dev", "software engineer")
// console.log(newString)



// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
    let random = Math.random()

    if (random < .33) {
        return "rock"
    } else if (random < .66) {
        return "paper"
    } else {
        return "scissors"
    }
}
// console.log(rps())



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playGame(userChoice) {
    let botChoice = rps()
    if (userChoice === botChoice) {
        return ("Tie!")
    } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice == 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')) {
        return ('You Win')
    } else {
        return ('You Lose')
    }
}

// console.log(playGame('paper'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
// Print the results of each game to the console.

function playMultipleGames(choices) {
    choices.forEach((x, i) => {
        console.log(playGame(x))
    });
}

playMultipleGames(['rock', 'paper', 'scissors'])
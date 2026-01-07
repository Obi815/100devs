// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let blackPowerRanger = 'June'

blackPowerRanger = "THANKSGIVING"
console.log(blackPowerRanger)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let RedPwrRanger = "LearnWithLeon"

// alert(RedPwrRanger.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function absolute(n1, n2, n3, n4, n5) {
    alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5))
}
// absolute(10, 10, 10, 10, 10)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highAndLow(n1, n2, n3) {
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)

    console.log(`Max: ${max} Min: ${min}`)
}

highAndLow(10, 40, 70)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails() {
//     let result = Math.random()
//     if (result < .5) {
//         return 'Heads'
//     } else {
//         return 'Tails'
//     }
// }

const headsOrTails = () => Math.random() < .5 ? 'head' : 'tails'

// console.log(headsOrTails())


//*Loops*
//Create a function that takes in a number. 
// Console log the result of heads or tails using 
// the previous function x times where x is the number 
// passed into the function. Call the function.

function flipCoin(n1) {
    for (let i = 1; i <= n1; i++) {
        let result = headsOrTails()
        console.log(result)
    }
}

flipCoin(10)
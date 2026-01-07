// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let haveADuck = true
// alert(haveADuck)




// Declare a variable, reassign it to your favorite color, 
// and console log the value
let color = 'red'
color = 'blue'
// console.log(color)



// *Functions*
// Create a function that takes in 4
// numbers and returns the sum of the first 3 
// numbers divided by the fourth. Return the result. Call the function.

function fourNumbers(n1, n2, n3, n4) {
    return (n1 + n2 + n3) / n4
}

// console.log(fourNumbers(3, 4, 5, 2))


// Create a function that takes in 2 numbers. 
// Console log the first number to the power of the second. 
// Call the function.

// function twoNumbers(n1, n2) {
//     // console.log(n1 ** n2)
//     console.log(Math.pow(n1, n2))
// }

// twoNumbers(4, 2)


// *Conditionals*
// Create a function that takes in a boolean and a string. 
// If the boolean is true, alert the string. 
// If the boolean is false, console log the string

// function alertOrLog(bool, str) {
//     // if (bool) {
//     //     alert(str)
//     // } else {
//     //     console.log(str)
//     // }

//     // if bool is true do what is on the left of colon 
//     // if false do what is on the right
//     // bool ? alert(str) : console.log(str)
// }

const alertOrLog = (bool, str) => bool ? alert(str) : console.log(str)

//*Loops*
//Create a function that takes in a number.
//  Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" 
// instead of that number, if the number is divisible 
// by 5 log "buzz" instead of the number, 
// and if the number is divisible by 3 and 5 log 
// "fizzbuzz" instead of that number
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        } else if (i % 3 == 0) {
            console.log('fizz')
        } else if (i % 5 == 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz(25)


newArr = ['Zebra', , true, 21]


console.log(newArr)

// console.log(newArr[0])
// console.log(newArr[1])
// console.log(newArr[2])
// console.log(newArr[3])

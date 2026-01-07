// *Variables*
// Create a variable and console log the value
// let dWade = 'UGLY'
// console.log(dWade)

// // Create a variable, add 10 to it, and alert the value
// let number = 50
// // alert(number + 10)

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
// function subtracts(n1, n2, n3, n4) {
//     alert(n1 - n2 - n3 - n4)
// }

// // subtracts(10, 2, 4, 6)

// // Create a function that divides one number by another and returns the remainder
// function remainder(n1, n2) {
//     return n1 % n2
// }

// console.log(remainder(9, 4))
// // *Conditionals*
// // Create a function that adds two numbers and if the sum 
// // is greater than 50 alert Jumanji

// function Jumanji(n1, n2) {
//     if ((n1 + n2) > 50) {
//         alert('Jumanji')
//     }
// }

// Jumanji(30, 30)

// // Create a function that multiplys three numbers 
// // and if the product is divisible by 3 alert ZEBRA

// function zebra(n1, n2, n3) {
//     let divisible = n1 * n2 * n3

//     if (divisible % 3 == 0) {
//         alert('ZEBRA')
//     }
// }

// zebra(2, 5, 3)

// //*Loops*
// //Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
// function logWordXTimes(word, num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(word)
//     }
// }

// logWordXTimes('word', 21)

// *Variables*
// Create a variable and console log the value
const number = 18
console.log(number)

// Create a variable, add 10 to it, and alert the value
let newNumber = 20
// alert(newNumber + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(n1, n2, n3, n4) {
    let difference = n1 - n2 - n3 - n4
    // alert(difference)
}

subtracts(100, 20, 30, 50)
// Create a function that divides one number by another and returns the remainder
function remainder(n1, n2) {
    return n1 % n2
}

console.log(remainder(10, 9))
// *Conditionals*
// Create a function that adds two numbers and if the sum 
// is greater than 50 alert Jumanji

function Jumanji(n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji')

        // added some more code to practice 
    } else if (n1 + n2 < 50) {
        alert('John Cena')
    } else {
        alert('The Undertaker')
    }
}

Jumanji(25, 26)
// Create a function that multiplys three numbers 
// and if the product is divisible by 3 alert ZEBRA
function multiplys(n1, n2, n3) {
    if (n1 * n2 * n3 % 3 == 0) {
        alert('Zebra')
    }
}

multiplys(2, 2, 2)
//*Loops*
//Create a function that takes in a word and a number. 
// Console log the word x times where x was the number passed in

function Loops(word, num) {
    for (let i = 1; i < num + 1; i++) {
        console.log(word)
    }
}

Loops('Im going to be king of the pirates', 9)
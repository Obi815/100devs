// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 2
// alert(num)

// Create a variable, divide it by 10, and console log the value
let number = 30
console.log(number / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplys(n1, n2, n3) {
    alert(n1 * n2 * n3)
}
// multiplys(3, 3, 3)

// Create a function that takes in 4 numbers. 
// Add the first two numbers and subtract the next two. Console log the result
function fourNumbers(n1, n2, n3, n4) {
    let numbers = (n1 + n2) - n3 - n4
    console.log(numbers)
}

fourNumbers(10, 20, 5, 5)

// *Conditionals*
// Create a function that takes in 3 numbers. 
// Starting with 100 add the first number, subtract the second, 
// and divide the third. If the value is greater then 25, console log 
// "WE HAVE A WINNNA"

function winner(n1, n2, n3) {
    let decide = (100 + n1 - n2) / n3

    if (decide > 25) {
        console.log('We Have a Winner')
    }
}

winner(10, 15, 2)

// Create a function that takes in a day of the week. 
// If it is a weekend alert, "weekend" and if not alert "week day".
//  Handle capitilization and if the user does not enter a day
//  of the week alert "Try again!"

document.querySelector('#btn').addEventListener('click', dayOfWeek)

function dayOfWeek() {
    let text = document.querySelector('input').value.toLowerCase()

    if (text == 'saturday' || text == 'sunday') {
        alert('Weekend')
    } else if (text == 'monday' || text == 'tuesday' ||
        text == 'wednesday' || text == 'thursday' || text == 'friday') {
        alert("Weekday")
    } else {
        alert('try again')
    }
}

// if you dont want to create an input 
// just call the function with the day you want
// make sure you give function and argument and 
// comment out the addEventListener
// dayOfWeek('fri')


//*Loops*
//Create a function that takes in a number. 
// Console log all values from 1 to that number or greater, but count by 3

function remainder(n1) {
    for (let i = 1; i <= n1; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}
remainder(33)
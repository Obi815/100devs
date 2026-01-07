//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(num1, num2) {
    let sum = num1 - num2
    alert(sum)
}
// subtract(50, 30)

//create a function that divides three numbers and console logs the quotient
function divides(num1, num2, num3) {
    let ans = (num1 / num2 / num3)
    console.log(ans)
}
// divides(12, 4, 3)
//create a function that multiplys three numbers and returns the product
function multiply(num1, num2, num3) {
    return num1 * num2 * num3
}
// let sum = multiply(4, 2, 8)
// alert(sum)

// function turnIntoMoney() {
//     let product = multiply(5, 10, 2)
//     alert('$' + product)
// }

// turnIntoMoney()
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder(num1, num2, num3) {
    return (num1 + num2) % num3
}
console.log(remainder(3, 3, 2))
// remainder(3, 3, 2)


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
//  If the product is greater than 100 add the sum of the last two numbers 
// and console log the value. If the product is less that 100,
//  subtract the difference of the last two numbers and console 
// log the value. If the product is 100, multiply
//  the first three numbers together and alert the 
// remainder of dividing the fourth number

function Hard(n1, n2, n3, n4) {
    let firstTwo = n1 * n2
    let lastTwo = n3 + n4
    let firstThree = n1 * n2 * n3

    if (firstTwo > 100) {
        console.log('greater than 100 ' + (firstTwo + lastTwo))
    } else if (firstTwo < 100) {
        console.log(firstTwo - lastTwo)
    } else if (firstTwo == 100) {
        console.log(firstThree % n4)
    }
}

Hard(50, 2, 4, 4)

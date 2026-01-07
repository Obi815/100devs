//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [10, 20, 30, 40]
let sum = 0;

numbers.forEach((x, I) => {
    sum += x
});
// alert(sum)

// Learn this code too 
let numbers2 = [20, 40, 60, 80]
let sum2 = numbers2.reduce((acc, curr) => acc + curr, 0)
// alert(sum2)

//explaination:
// numbers2 is an array of numbers
// reduce is a function that iterates through each number in the array
// acc is the accumulator that holds the sum of the numbers
// curr is the current number being iterated through
// 0 is the initial value of the accumulator
// the function returns the sum of all the numbers in the array



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareNumbers(arr) {
    return arr.map(num => num * num)
}
console.log(squareNumbers([1, 2, 3, 4, 5])) // [1, 4, 9, 16, 25]

//explaination:
// squareNumbers is a function that takes in an array of numbers
// the map function iterates through each number in the array
// num is parameter that represents each number in the array
// the function returns a new array with each number squared


//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString("hello")) // "olleh"

//explaination:
// the split function splits the string into an array of characters
// the reverse function reverses the array of characters
// the join function joins the array of characters back into a string

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str) {
    return str.split('').reverse().join('') === str ? alert(true) : alert(false)
}
palindrome('hantah') // false

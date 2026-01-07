//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Brooklyn 99', 'New Girl', 'Parks & Rec', 'The Office', 'Superstore']

tvShows.forEach((x, i) => {
    document.querySelector('h2').innerText += tvShows[i]
});


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [1, 2, 3, 4, 5, 6]

let onlyEvens = arr => arr.filter(num => num % 2 === 0)

console.log(onlyEvens(numbers))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfTwo(arr) {
    let sorted = arr.sort((a, b) => a - b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

sumOfTwo([2, 3, 1, 5, 4])

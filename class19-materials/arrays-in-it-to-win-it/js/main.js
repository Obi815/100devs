//Create an array of movies with at least three movies.
let newArr = ['Rush Hour', 'Incredibles', 'Fast and Furious']
newArr[3] = 'Sing Sing'

//Using the array from above, 
// store the first movie in a variable
favMovies = newArr[0]

//Get the length of the original array 
// and store it in a new variable
let numberOfMovie = newArr.length

//Get the last element in that array 
// and store it in a new variable. 
// What if your array was really large 
// and you didn't know the last index? 
// Would your solution still work?
let lastArry = newArr[newArr.length - 1]

console.log(newArr)
console.log(favMovies)
console.log(numberOfMovie)
console.log(lastArry)

// EXTRAS

let bestColors = ['green', 'blue', 'yellow', 'black']
// bestColors[4] = 'Brown'

// for (let i = 0; i < bestColors.length; i++) {
//     // console.log(bestColors[bestColors.length - 1])
//     console.log(bestColors[i])
// }

// ARRAY ITERATIONS

bestColors.forEach((x, i, a) => console.log(x, i, a))

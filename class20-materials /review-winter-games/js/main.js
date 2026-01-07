//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array (do not use map or filter)

function onlyEvens(arr) {
    //Calling the function with the array at bottom
    let evens = []
    // set up empty array 
    arr.forEach((x, i) => {
        // running through loop 
        if (x % 2 === 0) {
            // if numbers that are in array are even push it to evens 
            evens.push(x)
        }
    })

    return evens
}
console.log(onlyEvens([1, 2, 3, 4, 5, 6]))
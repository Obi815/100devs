//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reversePokemon(arr) {
    return arr.reverse()
}
console.log(reversePokemon(['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle']))
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the 
// sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.


function twoArrays(arr1, arr2) {
    return arr1.reduce((acc, curr) => acc + Math.pow(curr, 2), 0) > arr2.reduce((acc, curr) => acc + curr ** 3, 0)
}

console.log(twoArrays([2, 2, 2], [1, 1, 1]))


// for(let i = 0; i )



//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function newArr(arr) {
    return arr.filter((element, index, array) => element % index === 0)
    // element, index, array are what is used in the filter method
    // element is the current element being processed in the array
    // index is the index of the current element being processed in the array
    // array is the array that filter was called upon
}

console.log(newArr([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumStrings(arr) {
    return arr.map(Number).reduce((acc, curr) => acc + curr, 0)
    // return arr.reduce((acc, curr) => acc + Number(curr), 0)   // alternative way
}

console.log(sumStrings(['10', 20, '30', 40])) // 100
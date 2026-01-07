// Create a function that takes in an array. 
// If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". 
// If they are equal, alert "We close in an hour".

function hiBye(arr) {
    if (arr[0] < arr[arr.length - 1]) {
        alert('Hi')
    } else if (arr[0] > arr[arr.length - 1]) {
        alert('Bye')
    } else {
        alert('We close in an hour')
    }
}

// hiBye([5, 3, 4, 5])



let bestColors = ['green', 'blue', 'yellow', 'black']

// FOR LOOP 
// for (let i = 0; i < bestColors.length; i++) {
//     console.log(bestColors[i])
// }


//  FOR EACH LOOP 
bestColors.forEach((x, i) => console.log(x))
// Run once for each element in array (bestColors)
// Grabs Element, Index, Take note what array it came from
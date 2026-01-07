//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiply(arr) {
    let product = 1
    arr.forEach((x, i) => product *= x)
    alert(product)
}

multiply([10, 2, 3])
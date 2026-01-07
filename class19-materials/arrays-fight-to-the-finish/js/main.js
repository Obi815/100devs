//Create an array of movie titles. 
// Loop through the array and add each element to the h2.
// let movies = ['Rush Hour', 'Incredibles', 'Weapons']

// for (let i = 0; i < movies.length; i++) {
//     document.querySelector('h2').innerText += movies[i]
// }


//Create an array of numbers. 
// Loop through the array and add three to each number
//  and replace the old number.

// let numbers = [10, 20, 30]




// numbers.forEach((item, i) => {
//     numbers[i] = item + 3
//     // console.log(numbers[i])

// })


//Find the average of all the numbers from question two

// forEach example
// let sum = 0

// numbers.forEach((num) =>
//     sum += num)
// console.log(sum)

// for loop example
// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum / numbers.length)


// function multiply(n1, n2) {
//     let sum = 0
//     for (let i = 0; i < n2 - 1; i++) {
//         if (i % n1 === 0) {
//             sum += i
//         }
//     }
// }
// res

// multiply(2, 9)


// function sumMul(n, m) {
//     let sum = 0;
//     for (let i = n; i < m; i++) {
//         if ((i % n == 0) && (m > 0)) {
//             sum += i;
//         }
//     }
//     if (sum > 0) {
//         return sum;

//     }
//     else return ('INVALID');
// }
// sumMul();



// HOMEWORK
// Write a program that:

// Creates an array named musketeers containing values
// "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// let musketeers = ["Athos", "Porthos", "Aramis"]

// for (let i = 0; i < musketeers.length; i++) {
//     // console.log(musketeers[i])
// }

// musketeers.push("D'Artagnan")
// // console.log(musketeers)

// musketeers.forEach(myElement => {
//     // console.log(myElement)
// })

// musketeers.splice(2, 1)
// // console.log(musketeers)

// for (let myElement of musketeers) {
//     console.log(myElement)
// }


// Write a program that creates the following array, 
// then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10]

// let sum = 0

// for (let i = 0; i < values.length; i++) {
//     sum += values[i]
// }

// console.log(sum)

// Write a program that creates the following array, 
// then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];

// let maxValue = 0

// values.forEach(myElement => {
//     if (myElement > maxValue) {
//         maxValue = myElement
//     }
// })
// console.log(maxValue)


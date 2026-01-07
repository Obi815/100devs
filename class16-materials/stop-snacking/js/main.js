//Create a function that grabs the number of snacks from the 
// input and tells you to stop that many times
// function stopSnacking() {
//     for (i = 1; i <= n; i++) {
//         let n = document.getElementsByTagName('input').value
//         document.querySelector('#stops').innerText += 'n'
//     }
// }

// document.querySelector('#help').addEventListener('click', stopSnacking)


// function stopSnacking() {
//     let numOfSnack = Number(document.querySelector('input').value)

//     // clears the h2 every time we click 
//     document.querySelector('#stops').innerText = ''


//     for (let i = 1; i <= numOfSnack; i++) {
//         document.querySelector('#stops').innerText += ' STOP!'
//     }
// }
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
    document.querySelector('#stops').innerText = ''
    let stop = document.querySelector('input').value
    for (let i = 1; i <= stop; i++) {
        document.querySelector('#stops').innerText += ' Stop'
    }
}

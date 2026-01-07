// document.getElementById('purple').onclick = turnPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
// document.getElementById('orange').onclick = partyOrange


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyOrange() {
//   document.querySelector('body').style.backgroundColor = 'rgb(240, 162, 6)'
//   document.querySelector('body').style.color = 'white'
// }




// document.getElementById('purple').onclick = turnPurple
document.getElementById('green').onclick = turnGreen
document.getElementById('blue').onclick = turnBlue
document.getElementById('orange').onclick = turnOrange


// function turnPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

function turnGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'black'
}

function turnBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'orange'
}

function turnOrange() {
  document.querySelector('body').style.backgroundColor = 'rgb(240, 162, 6)'
  document.querySelector('body').style.color = 'dodgerblue'
}


document.getElementById('green').onclick = bigPurr


function bigPurr() {
  document.querySelector('body').style.fontFamily = "RodchenkoCTT"
}
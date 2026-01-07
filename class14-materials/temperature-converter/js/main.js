//Write your pseduo code first! 

// only on click
document.querySelector('#yell').addEventListener('click', run)

// get value from input
function run() {
    let cell = document.querySelector('#celcius').value

    cell = (cell * (9 / 5) + 32)

    document.querySelector('#placeToYell').innerText = cell
}

// convert value from celcius to f

// print converted value
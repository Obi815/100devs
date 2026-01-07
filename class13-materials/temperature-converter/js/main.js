//Write your pseduo code first! 
// 0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    // need value in celcius 
    let temp = document.querySelector('#celcius').value
    // convert from celcius to fahrenheit 
    temp = temp * (9 / 5) + 32
    // show it 
    document.querySelector('#placeToYell').innerText = temp

}

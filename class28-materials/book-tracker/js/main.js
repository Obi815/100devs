//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://api.balldontlie.io/v1/teams`

  fetch(url, {
    headers: {
      'Authorization': '168010a7-9255-4057-9a41-4a643b6fb107'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}



// https://app.balldontlie.io/
// fetch('http://api.weatherstack.com/current?access_key=81158bbc728151103e8dffcd1c7c7862&query=New%20York')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.location.name)
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });

document.querySelector('button').addEventListener('click', getfetch)

function getfetch() {
  const city = document.querySelector('input').value
  console.log(city)

  document.querySelector('img').src = ''
  document.querySelector('h2').innerText = ''
  document.querySelector('h3').innerText = ''
  document.querySelector('p').innerText = ''

  const url = `http://api.weatherstack.com/current?access_key=81158bbc728151103e8dffcd1c7c7862&query=${city}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.current.temperature)
      //want location name, temperature, weather descriptions
      let fTemp = ((data.current.temperature) * 9 / 5) + 32

      document.querySelector('img').src = data.current.weather_icons[0]
      document.querySelector('h2').innerText = data.location.name
      document.querySelector('h3').innerText = fTemp + "ºF"
      document.querySelector('p').innerText = data.current.weather_descriptions[0]
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

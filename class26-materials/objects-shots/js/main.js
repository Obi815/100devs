//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    let drink = document.querySelector('input').value
    let randomDrink = arr => Math.floor(Math.random() * arr.length);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)//fetching from the dog.ceo API
        .then(response => response.json())//parse the JSON from the response
        .then(data => {
            let randomIndex = randomDrink(data.drinks);
            console.log(data.drinks[randomIndex]);
            console.log(data.drinks);
            //log the dog photo URL to the console
            document.querySelector('h2').innerText = data.drinks[randomIndex].strDrink;
            document.querySelector('img').src = data.drinks[randomIndex].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[randomIndex].strInstructions;
        })
        .catch(error => {
            console.error(`Error fetching dog photo: ${error}`);
        });

}


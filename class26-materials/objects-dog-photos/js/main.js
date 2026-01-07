//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())//parse the JSON from the response
    .then(data => {
        console.log(data.message);//log the dog photo URL to the console
        document.querySelector('img').src = data.message
    })
    .catch(error => {
        console.error(`Error fetching dog photo: ${error}`);
    });
//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow {
    constructor(title, genre, rating, numofEp) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numofEp = numofEp
    }
    play() {
        console.log('Playing...')
    }
    stop() {
        console.log('Stopping...')
    }
    saveToList() {
        console.log('Saved To List')
    }
}

let bridgerton = new NetflixTvShow('Bridgerton', 'Period Romantic Drama', '99%', 16)
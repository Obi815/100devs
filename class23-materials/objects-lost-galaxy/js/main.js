//Create a dog object that has four properties and three methods
let dog = {}

dog.name = 'Buddy'
dog.breed = 'Bulldog'
dog.color = 'Brown'
dog.age = 5

dog.bark = function () {
    console.log('Woof Woof')
}

dog.jump = function () {
    console.log('Blast off!')
}

dog.fetch = function (item) {
    console.log(`You threw the ${item}. ${dog.name} is fetching it!`)
}
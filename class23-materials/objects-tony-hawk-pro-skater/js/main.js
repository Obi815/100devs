//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkCharacter(chName, chStance, chSponsor, chMove) {
    this.name = chName
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove
    this.trick = function () {
        console.log('Kickflip!')
    }

    this.taunt = function () {
        console.log(`Don't make me use my ${this.specialMove}!`)
    }
    this.grab = function () {
        console.log('MELON GRAB!')
    }

}

let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', '360 Flip')

//Explaination: 
// TonyHawkCharacter is a constructor function that creates objects 
// chname, chStance, chSponsor, and chMove are parameters used to set the properties of the object
// this is used to define properties and methods for the object that use parameters to call
// Three methods are defined: trick, taunt, and grab
// An instance of TonyHawkCharacter is created with the name kareemCampbell


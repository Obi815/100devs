//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fightJump, fightCrouch, fightKick, fightPunch) {
    this.jump = fightJump
    this.crouch = fightCrouch
    this.kick = fightKick
    this.punch = fightPunch
    this.slogan = function () {
        console.log(`You can't handle my ${this.punch}`)
    }
    this.wind = function () {
        alert('Haha')
    }

    this.dash = function () {
        console.log('Whoop Missed Me!')
    }
}

let ryu = new StreetFighter('high', 'low', 'body', 'haddduuuken')


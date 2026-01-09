//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMaker {
    constructor(make, model, color, price /*Parameters*/) {
        this.make /*Properties*/ = make; /*Parameters*/
        this.model /*Properties*/ = model; /*Parameters*/
        this.color /*Properties*/ = color; /*Parameters*/
        this.price /*Properties*/ = price; /*Parameters*/
    }
    brewEspresso() { //Methods
        console.log("Brewing a fresh cup of espresso!");
    }
    steamMilk() { //Methods
        console.log('Steaming milk')
    }
    cleanMachine() { //Methods
        console.log('Cleaning the espresso machine')
    }
}

let gaggia = new EspressoMaker('Gaggia', 'Classic Pro', 'Red', 400);
//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class ExpressoMaker {
    constructor(make, model, color, price /*Parameters*/) {
        this.make /*Properties*/ = make; /*Parameters*/
        this.model /*Properties*/ = model; /*Parameters*/
        this.color /*Properties*/ = color; /*Parameters*/
        this.price /*Properties*/ = price; /*Parameters*/
    }
    brewEspresso() {
        console.log("Brewing a fresh cup of espresso!");
    }
    steamMilk() {
        console.log('Steaming milk')
    }
    cleanMachine() {
        console.log('Cleaning the espresso machine')
    }
}

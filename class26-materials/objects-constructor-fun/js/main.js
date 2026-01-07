//Create a constructor with 4 properties and 3 methods
function MakePizza(size, toppings, crustType, price) {
    this.size = size;
    this.crustType = crustType;
    this.toppings = toppings;
    this.price = price;

    this.bake = function () {
        console.log("Baking....")
    }
    this.burnMouth = function () {
        console.log("Ouch! It's hot!")
    }
    this.frissbee = function () {
        console.log("Pizza flying through the air!")
    }
}

let pizza = new MakePizza('large', ['spinach', 'garlic'], 'deep dish', 15)

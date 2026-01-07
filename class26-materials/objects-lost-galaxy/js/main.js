//Create a dog object that has four properties and three methods

let pizza = {}

pizza.size = 'Large'
pizza.topping = ['Pepperoni', 'Mushrooms', 'Olives']
pizza.crust = 'Stuffed Crust'
pizza.cheese = 'Mozzarella'

pizza.bake = function () {
    console.log("Baking the pizza at 450 degrees for 15 minutes.")
}
pizza.slice = function () {
    console.log("Slicing the pizza into 8 pieces.")
}
pizza.serve = function () {
    console.log("Serving the pizza hot and fresh!")
}

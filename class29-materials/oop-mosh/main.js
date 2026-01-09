// /// Object Literals ///
// const circle = {
//     radius: 1, //properties
//     location: { //properties
//         x: 1,
//         y: 1
//     },
//     draw: function () { //draw is a method
//         console.log('draw');
//     }
// };

// circle.draw(); //calling the method

// /// Factory Functions ///
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('dont draw');
//         }
//     }
// }

// const circle1 = createCircle(1);
// circle1.draw();

// /// Constructor Functions ///  
// function NewCircle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw from constructor');
//     }
// }

// const circle2 = new NewCircle(1);

let obj = { value: 10 }

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); //10
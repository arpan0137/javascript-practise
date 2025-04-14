// Factory Function
function createCircle(radius){
    return {
        radius: radius,
        draw: function() {
            console.log('Drawing Circle!!');
        }
    };
}
const circle = createCircle(12)
circle.draw()

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = () => {
        console.log(`Drawing Circle with radius ${radius} !!`)
    }
}

const anotherCircle = new Circle(10);
anotherCircle.draw()

// Abstraction
function Square(length){
    this.length = length;

    // this.defaultLocation = { x: 0, y: 0 }; // --> this should not be accessible outside function
    let defaultLocation = { x:0, y:0 }; // --> now this will be accessible only inside function
    // this.computeOptimumLocation = function () { // --> also this should not be accessible outside function
    //     // ...
    // }
    let computeOptimumLocation = function () {// --> also this should not be accessible outside function
        // ...
    }

    this.draw = () => {
        // this.computeOptimumLocation();
        computeOptimumLocation(); // now it will be accessed without this keyword

        console.log(`Drawing Square with Length ${length} !!`)
    }
}

const square = new Square(10)
square.draw()
// square.computeOptimumLocation // --> this will not work
console.log(square)
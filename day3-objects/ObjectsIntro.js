// const vehicle = {
//     wheels: 4,
//     engine : function() {
//         return "Vrroooom!";
//     }
// };

//
// const truck = Object.create(vehicle);
// truck.doors = 2;
// truck.wheels = 6;
// console.log(truck.engine());
//
// const car = Object.create(vehicle); // Object Instance
// car.doors = 4;
// car.engine = function () {
//     return "Whoosh!"
// }
//
// console.log(car.wheels); // Inheritance
// console.log(car);
//
// const tesla = Object.create(car);
// tesla.engine = function () {
//     return "Shhhhh..";
// }
//
// console.log(tesla.engine())

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// delete band.drums
// console.log(band.hasOwnProperty("drums") ? `Found` : `Not Found`)
// console.log(Object.keys(band));
// console.log(Object.values(band));
//
// for (let job in band){
//     console.log(`On ${job}, it's ${band[job]} !!`)
// }

//Destructuring Objects
// const {vocals : myVocal, guitar} = band;
// console.log(myVocal)
// console.log(guitar)

function sings({ vocals }) { return `${vocals} sings!!` }

console.log(sings(band))
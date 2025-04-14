function setObject(object){
    for(let obj in object){
        console.log(`${obj}: ${object[obj]}`)
    }
}

let car = {
    brand: "Mercedes",
    model: "Maybach GLS 600",
    price: "3.5cr"
}

setObject(car)
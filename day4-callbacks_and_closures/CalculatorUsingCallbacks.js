function calculator(number1, number2, operation){
    return operation(number1, number2)
}

function addition(n1, n2) {
    return n1 + n2;
}

function subtraction(n1, n2){
    return n1 - n2;
}

function multiplication(n1, n2){
    return n1 * n2;
}

function division(n1, n2){
    return n1 / n2;
}

console.log("Addition : ", calculator(10,20, addition))
console.log("Subtraction: ", calculator(50,30, subtraction))
console.log("Multiplication: ",calculator(8,83, multiplication))
console.log("Division: ",calculator(1000,2, division))
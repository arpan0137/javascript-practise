const calculate = (a, b, operation) => {
    return operation(a, b);
}

const add = (x, y) => {
    return x + y;  // callback function
}

console.log(calculate(3, 4, add)); // 7
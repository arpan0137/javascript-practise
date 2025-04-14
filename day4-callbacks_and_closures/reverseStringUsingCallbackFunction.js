const string_operation = (string, operation) =>{
    return operation(string);
}

const reverse_string = (string) => {
    return [...string].reverse().join("")
}

console.log("Reversed String: " + string_operation("arpan",reverse_string))
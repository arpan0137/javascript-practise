// Input: "hello world"
// Output: "olleh dlrow"

let string = "Colleges are only for degree"
string = string.split(" ")

let reversedString = ""

for(let word of string){
    reversedString += word.split("").reverse().join("") + " "
}

console.log(reversedString.toUpperCase())
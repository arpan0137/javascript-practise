// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(string){ // custom logic - less efficient
    let stringArray = string.split(" ");
    let capitalizedString = ""
    for(let i = 0; i < stringArray.length; i++){
        capitalizedString += (stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1,stringArray[i].length) + " ") // hello- H
    }
    return capitalizedString
}

function capitalizeWordsUsingMap(string){ // using map function - more efficient
    return string
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world"))
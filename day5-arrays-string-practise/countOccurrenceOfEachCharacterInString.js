// Input: "hello"
// Output: { h:1, e:1, l:2, o:1 }

// function findOccurrence(string){ // by storing in object
//     let occurrenceMapping = {}
//     for(let char of string) {
//         if (occurrenceMapping[char]) {
//             occurrenceMapping[char]++
//         } else {
//             occurrenceMapping[char] = 1
//         }
//     }
//     for(let char in occurrenceMapping){
//         console.log(`occurrence of ${char} is ${occurrenceMapping[char]}`)
//     }
// }

function findOccurrence(string){ // without storing in object
    let visited = [];
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(!visited.includes(char)){
            let charOccurrence = 1
            for(let j = i+1; j<string.length; j++){
                if(char === string[j]){
                    charOccurrence++
                }
            }
            visited.push(char);
            console.log(`occurrence of ${char} is ${charOccurrence}`)
        }
    }
}
const string = "Hello";
findOccurrence(string)
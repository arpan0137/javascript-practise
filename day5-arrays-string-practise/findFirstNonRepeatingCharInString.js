// Input: "aabbccdeff"
// Output: "d"

function findFirstNonRepeatingCharUsingObj(string) {
    let charObj = {};
    for(let char of string){
        if(charObj[char]){
            charObj[char]++;
        } else {
            charObj[char] = 1;
        }
    }
    for(let char in charObj){
        if(charObj[char] === 1){
            console.log(`First no repeating character in string is: ${char}`);
            break;
        }
    }
}

function findFirstNonRepeatingCharUsingMap(string){
    let charMap = new Map();
    for(let char of string){
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }
    for(let [char,count] of charMap.entries()){
        if(count === 1){
            console.log(`First non-repeating character in string is: ${char}`);
            return;
        }
    }
    console.log("no non-repeating character found !");
}

let string = "aabbddceffg";
findFirstNonRepeatingCharUsingMap(string);
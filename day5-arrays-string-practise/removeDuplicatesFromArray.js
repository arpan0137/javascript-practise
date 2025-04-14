// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]

function removeDuplicates(array){
    let newArray = []
    for(let number of array){
        if(!newArray.includes(number)){
            newArray.push(number)
        }
    }
    console.log(newArray)
}

let array = [10,30,30,40,60];
removeDuplicates(array)
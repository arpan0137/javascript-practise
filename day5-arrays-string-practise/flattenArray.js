// Input: [1, [2, [3, 4], 5],6]
// Output: [1, 2, 3, 4, 5]

function flattenArray(array){
    let result = [];
    for(let item of array){
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item)) // recursive call
        }
        else {
            result.push(item);
        }
    }
    return result;
}

let array = [1,[2,[3,4],5],6]
array = flattenArray(array)
console.log(array)
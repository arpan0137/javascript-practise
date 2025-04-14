function CustomForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i],i,array);
    }
}

function printArray(value,index,array){
    console.log(`index ${index} has ${value} value!!`);
}

const numbers = [10, 20, 30, 40, 50];
CustomForEach(numbers, printArray);
let marksArray = [69, 80, 87, 65, 76, 90, 67];

const average = marksArray.reduce((initialAverage,marks) =>  initialAverage + marks, 0) / marksArray.length

console.log( average.toFixed(2) )
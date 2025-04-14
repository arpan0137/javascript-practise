// function greetUser(name, age){
//     return `Hello ${name}, you are ${age} years old.`
// }
//
// console.log(greetUser('Arpan',22));

function checkOddEven(n){
    return n%2 === 0 ? (n*n) + " Even" : ((n*n)*n) + " Odd" ;
}

let n = 4;
console.log("Number " + n + " is " + checkOddEven(n))
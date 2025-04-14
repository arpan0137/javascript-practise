let names = ['Ronaldo','Messi','Speed','Neymar', 'Hardik', 'Jasprit', 'Rohit'];

function stringLength(string){
    let length = 0
    string.split('').forEach(() => {length++})
    return length
}

let namesLongerThanFive = names.filter((name) => {
    return stringLength(name) > 5
})
console.log(namesLongerThanFive)
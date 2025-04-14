const numbers = [10, 8, 14, 15, 18, 36, 41];

const find = numbers.find((num) => (num % 7) === 0 )

console.log(find ? find : "Not Found")
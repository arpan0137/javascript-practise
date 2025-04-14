// forEach, Map, Filter, Reduce, Some, Every, Find, Includes

let Items = [
    {name: "Watch", price: 1000},
    {name: "Mouse", price: 1500},
    {name: "AC", price: 35000},
    {name: "Fan", price: 3500},
    {name: "Laptop", price: 50000}
]

// Items.push({name:"Monitor", price:500}); // add an Item at end
// Items.pop(); // remove an item from end
// Items.unshift({name:"Desk", price:12000}) // add an Item at start
// Items.shift(); //remove an item from start

//forEach
Items.forEach((item) => {
    console.log(item)
})

// map
const mappedItems = Items.map((item) => {
    return item.name
})
console.log(mappedItems);

// filter
const filteredItems = Items.filter((item) => {
    return item.price < 5000;
})
console.log(filteredItems);

// reduce
const totalPrice = Items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(totalPrice);

// some
const hasInexpensiveItem = Items.some((item) => {
    return item.price <= 1000
})
console.log(hasInexpensiveItem ? "Has Some Inexpensive Item" : "All items are Expensive only!!");

// every
const hasAllInexpensiveItem = Items.every((item) => {
    return item.price <= 1000
})
console.log(hasAllInexpensiveItem ? "Has All Inexpensive Item" : "Some items are Expensive!!");

//find
const findItem = Items.find((item) => {
    return item.price === 1100
})
console.log(findItem ? "Item Found!!" : "Item Not Found!!");

//includes
const includes = Items[0].name.includes("TV")
console.log(includes ? "Item is Present!!" : "Item is Not Present!!");

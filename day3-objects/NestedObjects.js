// nested Objects = objects inside objects
//                  it allows you to represent complex data structures
//                 child Object is enclosed inside parent Object
//
//                 Person{Address{}, Contact{}}
//                 ShoppingCart{Product1{}, Product2{}, Product3{}}

const person = {
    fullName: "Peter Parker",
    age: 26,
    isStudent: true,
    hobbies: ["karate", "cooking", "dancing"],
    address: {
        city: "NYC",
        country: "USA"
    }
}

// console.log(person.fullName)
// console.log(person.hobbies[0])
// console.log(person.address.city)

// for (const property in person.address){
//     console.log(person.address[property])
// }

class Person{
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(city, country) {
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Peter",27,"NYC","USA")

const person2 = new Person("Superman",39,"London","UK")

const person3 = new Person("Jin hao",45,"Seoul","South Korea")

console.log(person1.address)
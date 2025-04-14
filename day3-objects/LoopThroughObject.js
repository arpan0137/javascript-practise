const library = [
    {title: "DBMS", author: "Jarvis", pages: "4500"},
    {title: "DS", author: "ChatGPT", pages: "11000"},
    {title: "OS", author: "Linux", pages: "25000"}
]

// for (let book in library){
//     console.log(library[book].title)
// }

for (let book of library){
    console.log(book.title)
}
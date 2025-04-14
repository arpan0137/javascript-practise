const students = [
    { name: "Ravi", marks: 50 },
    { name: "Priya", marks: 38 },
    { name: "Aman", marks: 65 }
];

const passedStudent = students.filter((student) => {
    return student.marks > 40
})

const passedStudentsNamesInUppercase = passedStudent.map((student) => {
    return student.name.toUpperCase()
})

console.log(passedStudentsNamesInUppercase)
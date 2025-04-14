let school = {
    students: [
        {
            name: "rihanna",
            marks: {
                DS: 56, OS: 67, DBMS: 79, Java: 70
            }
        },
        {
            name: "sam",
            marks: {
                DS: 56, OS: 89, DBMS: 68, Java: 65
            }
        },
        {
            name: "obama",
            marks: {
                DS: 90, OS: 89, DBMS: 78, Java: 75
            }
        },
        {
            name: "trump",
            marks: {
                DS: 90, OS: 90, DBMS: 90, Java: 90
            }
        }
    ]
};

// console.log(school.students[0])
let totalMarksOfEachStudent = [];
for (let student of school.students){
    let totalMarks = 0;
    let subjectMarks = student.marks
    for(let subject in subjectMarks){
        totalMarks += subjectMarks[subject]
    }
    totalMarksOfEachStudent.push({name: student.name, total_marks: totalMarks})
    // console.log(`Total marks of ${student.name} is ${totalMarks}`)
}

for (let student of totalMarksOfEachStudent){
    console.log(`Total marks of ${student.name} is ${student.total_marks} !!`)
}

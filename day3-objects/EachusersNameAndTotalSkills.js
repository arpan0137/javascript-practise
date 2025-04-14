const users = [
    {
        name: "Aman",
        skills: {
            frontend: ["HTML", "CSS", "JS"],
            backend: ["Node", "Express"]
        }
    },
    {
        name: "Reena",
        skills: {
            frontend: ["React"],
            backend: ["Django", "MongoDB"]
        }
    }
];

// Print each user’s name and total no. of skills
let skillsCounts = []
for(let user of users){
    let totalSkills = 0
    let currentUser = user.skills
    for(let skill in currentUser){
        let currentSkill = currentUser[skill]
        for (let skill of currentSkill){
            totalSkills++
        }
    }
    skillsCounts.push({name: user.name, skills_count: totalSkills})
}

for(let skill of skillsCounts){
    console.log(`${skill.name} have ${skill.skills_count} skills !!`)
}

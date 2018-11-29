function highestScore(students) {
    const classrooms = {};
    const isClassroomExists = classroomName => {
        if (typeof classrooms[classroomName] !== 'undefined') {
            return true;
        } else {
            return false;
        }
    }
    const setClassroom = student => {
        classrooms[student.class] = {
            name: student.name,
            score: student.score
        };
    }
    for (let i = 0; i < students.length; i++) {
        let classroomName = students[i].class;
        if (!isClassroomExists(classroomName)) { //if the class doesnt exist yet then declare and fill it for the first time
            setClassroom(students[i]);
        } else if (classrooms[classroomName].score < students[i].score) { //only compare when class exists otherwise it will crash
            setClassroom(students[i]);
        }
    }
    return classrooms;
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

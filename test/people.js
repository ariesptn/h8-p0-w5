let people = [
    ['name', 'class', 'score'],
    ['dimas', 'A', 90],
    ['wika', 'B', 100],
    ['semmi', 'A', 89]
]

function release0(input) {
    let result = [];
    for (let i = 1; i < input.length; i++) {
        result.push({});
        let scoreIndex = -1;
        for (let j = 0; j < input[i].length; j++) {
            result[i - 1][input[0][j]] = input[i][j];
        }
    }
    return result;
}

function release1(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(input[i])
        result[i].grade = getGrade(result[i].score);
    }
    return result;
}

function release2(newInput, prevData) {
    let result = [...prevData];
    for (let i = 0; i < newInput.length; i++) {
        result.push(newInput[i])
        result[result.length - 1].grade = getGrade(result[result.length - 1].score);
    }
    return result;
}

function getGrade(score) {
    let grade = '';
    if (score <= 25) { grade = 'D'; }
    else if (score <= 50) { grade = 'C' }
    else if (score <= 75) { grade = 'B' }
    else { grade = 'A' }
    return grade;
}

r0result = release0(people);
console.log(r0result);

r1result = release1(r0result);
console.log(r1result);

r2input = [{ name: 'awtian', class: 'B', score: 70 }, { name: 'Dimitri', class: 'B', score: 67 }];
r2result = release2(r2input, r1result);
console.log(r2result);

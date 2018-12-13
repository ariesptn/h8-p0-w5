let str = [
    ['id', 'nama', 'gender', 'age', 'status', 'class'],
    ['1', 'felix', 'male', 21, false, 'a'],
    ['2', 'helga', 'male', 22, false, 'b'],
    ['3', 'ilham', 'male', 23, false, 'a'],
    ['4', 'sigit', 'male', 24, false, 'b']
]

function people2(str) {
    let result = {};
    let ageIndex = 0;
    while (str[0][ageIndex] !== 'age') {
        ageIndex++;
    }
    let classIndex = 0;
    while (str[0][classIndex] !== 'class') {
        classIndex++;
    }
    for (let r = 1; r < str.length; r++) {
        if (str[r][ageIndex] > 20) {
            if (result[str[r][classIndex]] === undefined) {
                result[str[r][classIndex]] = [];
            }
            let insertObj = () => {
                let obj = {}
                for (let c = 0; c < str[r].length; c++) {
                    obj[[str[0][c]]] = str[r][c];
                }
                return obj;
            }
            result[str[r][classIndex]].push(insertObj());
            // result[str[r][classIndex]].push({});
            // for (let c = 0; c < str[r].length; c++) {
            //     result[str[r][classIndex]]
            //     [result[str[r][classIndex]].length - 1]
            //     [str[0][c]] = str[r][c];
            // }
        }
    }
    return result;
}

console.log(people2(str));

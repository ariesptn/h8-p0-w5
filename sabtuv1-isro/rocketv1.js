/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris

    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
    if (param % 2 === 0) {
        return 'invalid input';
    }
    let result = ''
    for (let i = 0; i < param; i++) {
        let line = "'";
        for (let j = 0; j < param; j++) {
            if (i === Math.floor(param / 2)) {
                line += '*';
            } else {
                if (j === Math.floor(param / 2)) {
                    line += '*';
                } else {
                    line += ' ';
                }
            }
        }
        result += line + "'\n";
    }
    return result.substring(0, result.length - 1);
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input
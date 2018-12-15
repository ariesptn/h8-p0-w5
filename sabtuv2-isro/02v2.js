/*
==============
bigIt Function
==============
Instruksi
=========
Ubah seiap huruf depan menjadi paling belakang posisinya dan ditambah dengan imbuhayn -ay
Contoh:
Big => igBay
RULES:
- Dilarang menggunakan .split .map .filter .sort .reduce
- Dilarang menggunakan REG EX
- WAJIB MENGGUNAKAN PSEUDOCODE 
*/
function bigIt(array) {
    let arrSplit = array.split(' ');
    let arrResult = [];
    let result = '';
    for (let i = 0; i < arrSplit.length; i++) {
        let text = '';
        text += arrSplit[i].substring(1) + arrSplit[i][0];
        text += 'ay';
        arrResult.push(text);
    }
    return arrResult.join(' ');
}

console.log(bigIt('Big latin is cool')); //'igBay atinlay siay oolcay'
console.log(bigIt('This is my string')); //'hisTay siay ymay tringsay'
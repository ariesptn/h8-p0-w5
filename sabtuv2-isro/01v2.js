/*
================
Eja Uang
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan pengejaan uang seperti:
1.500 => 1 ribu 5 ratus

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: 2 ribu
*/

/*



*/


function formatUang(number) {
    if (number < 10) {
        if (number !== 0) {
            return number;
        }else{
            return '';
        }
    } else if (number < 100) {
        return Math.floor(number / 10) + ' puluh ' + formatUang(number % 10);
    } else if (number < 1000) {
        return Math.floor(number / 100) + ' ratus ' + formatUang(number % 100);
    } else if (number < 1000000) {
        return Math.floor(number / 1000) + ' ribu ' + formatUang(number % 1000);
    } else {
        return Math.floor(number / 1000000) + ' juta ' + formatUang(number % 1000000);
    }
}

console.log(formatUang(7500)); // 7 ribu 5 ratus
console.log(formatUang(250)); // 2 ratus 5 puluh
console.log(formatUang(100000)); // 100 ribu
console.log(formatUang(1000000)); // 1 juta
console.log(formatUang(4999999)); // 4 juta 999 ribu 9 ratus 9 puluh 9
console.log(formatUang(135000)); // 135 ribu

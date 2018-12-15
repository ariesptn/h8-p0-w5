/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 2 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan
 - 'Medicine' adalah obat yang meningkatkan nyawa

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', 'Medicine', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', 'Medicine', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 2 villains
3. inputan: ['*', '*', '@', '*', 'Medicine', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/*

*/
function test(array) {
    let hp = 2;
    let isAlive = true;
    let villainCaptured = 0;
    let villainTotal = 0;
    for (s of array) {
        if (isAlive) {
            if (s === '@') {
                hp--;
                if (hp <= 0) {
                    isAlive = false;
                }
            } else if (s === 'Medicine') {
                hp++;
            } else if (s === 'Villain') {
                villainCaptured++;
            }
        }
        if (s === 'Villain') {
            villainTotal++;
        }
    }
    let resultAlive = isAlive ? 'Nice work, detective!' : 'Ooops, you die.';
    let resultVillain = villainCaptured === villainTotal && isAlive ? `You got all villains: ${villainCaptured}` : `You got ${villainCaptured} villains`;
    return resultAlive + ' ' + resultVillain;
}

console.log(test(['*', '*', '@', '*', 'Villain', '*', '@', 'Villain'])); // 'Ooops, you die. You got 1 villains'
console.log(test(['*', '*', '@', '*', 'Medicine', '@', 'Villain', '*', 'Villain', 'Villain', '@'])); // 'Ooops, you die. You got 3 villains'
console.log(test(['*', '*', '@', '*', 'Medicine', '@', 'Medicine', 'Villain', '*', 'Villain', '@', 'Villain'])); // 'Nice work, detective! You got all villains: 3'

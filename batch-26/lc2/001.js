/**
 Hapus Angka
-------------------------
Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

contoh:

input: 'hacktiv8'
output: 'hacktiv'

input: '17 Agustus 1945'
output: 'Agustus'

RULES:
- WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
- DILARANG MENGGUNAKAN method .split()
*/

function hapusAngka(sentence) {
  var hasil =''
  for (let i = 0; i < sentence.length; i++) {
    var temp = Number(sentence[i])
    if(temp >=0){
      hasil +=''
    } else {
      hasil +=String(sentence[i])
    }
  }
  return hasil;
}

console.log(hapusAngka('hacktiv8')); //hacktiv
console.log(hapusAngka('17 Agustus 1945')); //Agustus
console.log(hapusAngka('')); //''

//  // your code here
//  var strnum ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//  var hasil =''
//  for (var i = 0; i < sentence.length; i++) {
//    for (var j = 0; j < strnum.length; j++) {
//      if( sentence[i] !== strnum[j]){
//        hasil += sentence[i]
//      }else {
//        hasil += ''
//      }
//    }
//  }

//  return hasil;
// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

function merryChristmas(path) {
  //your code here
  var life = 3
  var present = 0
  for (let i = 0; i < path.length; i++) {
    if( path[i] ==='Pit Hitam' || path[i] ==='Nenek Penyihir' ){
      life --
    }else if ( path[i]=== 'Hadiah' ){
      present ++
    }
  }
  if (life >=1 && present > 0 ) {
    return 'Yeaaayyy, you got all presents: ' + present
  } else if ( life === 0 && present > 0 ) {
    return 'Be brave, next time! But it\'s okay, you got ' + present + ' present(s)'
  } else  if( life === 0 &&  present === 0 ) {
    return 'Wish you merry Christmas, last year you so naughty so you dont got present'
  }
}

console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']));

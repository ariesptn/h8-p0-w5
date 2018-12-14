/*
==================================
Array Mastery: Average Length Word
==================================

Nama:________

[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']

*/

function averageLengthWord(words) {
  let wordsArr = words.split(' ');
  /*let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let wordsArr = [''];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j] === words[i].toLowerCase()) {
        wordsArr[wordsArr.length - 1] += words[i];
      }
    }
    if (words[i] === ' ') {
      wordsArr.push('');
    }
  }*/
  let totalLetter = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length === 0) {
      wordsArr.splice(i, 1);
    } else {
      totalLetter += wordsArr[i].length;
    }
  }
  let average = Math.round(totalLetter / wordsArr.length);
  let result = [];
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length === average) {
      result.push(wordsArr[i]);
    }
  }
  return result;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []

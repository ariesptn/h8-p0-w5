/**
  Hapus Alphabet Rekursif

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai alphabet,
  hanya menyisakan symbol dan angka 0-9.

  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusAlphaRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusAlphaRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

**/
function hapusAlphaRec(str) {
  if (str.length === 0) {
    return '';
  } else {
    if (str.toLowerCase().codePointAt(0) >= 97 && str.toLowerCase().codePointAt(0) <= 122) {
      return hapusAlphaRec(str.substring(1, str.length));
    } else {
      return str[0] + hapusAlphaRec(str.substring(1, str.length));
    }
  }

}


//TEST CASE


console.log(hapusAlphaRec('test%$4aa')); // %$
console.log(hapusAlphaRec('devel0p3r s3j@@ati')); // 03 3@@
console.log(hapusAlphaRec('ma@#k!an~')); // @#!~
console.log(hapusAlphaRec('coding')); // ''
console.log(hapusAlphaRec('1+3-5*2=100')); // 1+3-5*2=100
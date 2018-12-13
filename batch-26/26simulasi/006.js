/**

******************************
ODD PAIR FIRST LAST RECURSIVE
******************************

Diberikan sebuah function oddPairFirstLast yang memiliki satu parameter bertipe number.
Function ini akan mengembalikan hasil penjumlahan nilai pasangan yang ganjil dimana pasangan ganjil tersebut
adalah gabungan index 0 + index terakhir, index 1 + index terakhir - 1, dst.
JIKA angka tidak memiliki pasangan MAKA dipasangkan dengan angka 1

Contoh 1:
----------
input: 2345
output: 25
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir - 1] => 34

  karena pasangan yang ganjil hanya 25 maka 25 + 0 => function akan me-return 25

Contoh 2:
---------
input: 23351
output: 87
penjelasan:
  - index[0] + index[terakhir] => 21
  - index[1] + index[terakhir-1] => 35
  - karena index[2] merupakan index[terakhir-2] (tidak memiliki pasangan)
    maka angka ini akan dipasangkan dengan angka 1 => 31

  karena pasangan ganjil adalah 21, 35 dan 31 maka 21 + 35 + 31 => function akan me-return 87

Contoh 3:
----------
input: 2335
output: 58
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir-1] => 33

  karena pasangan ganjil adalah 25 dan 33 maka 25 + 33 => function akan me-return 58



RULES
=====
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function oddPairFirstLast
  - Dilarang mengubah tipe data parameter
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif

**/

function oddPairFirstLast(num) {
  if (num < 10) {
    return parseInt(num + '1');
  } else if (num < 100) {
    if (num % 2 === 0) {
      return 0;
    } else {
      return num;
    }
  } else {
    let outer = num.toString()[0] + num.toString()[num.toString().length - 1];
    let inner = num.toString().substring(1, num.toString().length - 1);
    if (outer % 2 === 0) {
      return oddPairFirstLast(parseInt(inner));
    } else {
      return parseInt(outer) + oddPairFirstLast(parseInt(inner));
    }
  }
}

console.log(oddPairFirstLast(2345)) // 25
console.log(oddPairFirstLast(2335)) // 58
console.log(oddPairFirstLast(23351)) // 87
console.log(oddPairFirstLast(42548)); //51

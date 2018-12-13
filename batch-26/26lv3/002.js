/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/

function sumThree(params) {
  //your code here;
  var count = 0
  for (let i = 0; i < params.length; i++) {
    // console.log(count);
    for (let j = 0; j < params[i].length; j++) {
      var temp =  params[i] [j]
      // console.log(temp);
        if (temp > 99 &&  temp<=999 ) {
          count += temp
        }
    }
    // console.log(count);
  }
  return count
}

console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201,true ] ])); //543

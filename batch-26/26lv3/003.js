/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/


function uniqueDuplicateFinder(sentence) {
  // only code here!
}

console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// {
//   unique: [ 'hlloe' ],
//   duplicate: [ 'hello' ]
// }

console.log(uniqueFinder('john is coding')); // ['john', 'is', 'coding', 'and', 'he']
// {
//   unique: [ 'john', 'is', 'coding' ],
//   duplicate: []
// }

console.log(uniqueFinder('blue blue red blue violet red violet'));
// {
//   unique: [],
//   duplicate: [ 'blue', 'red', 'violet']
// }

console.log(uniqueFinder(''));
// {
//   unique: [],
//   duplicate: []
// }

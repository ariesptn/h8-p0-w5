/**
  Diberikan sebuah function findPair yang menerima sebuah array multidimensi.
  Function ini akan menghasilkan jumlah pasangan yang terdapat pada array multidimensi tersebut.

  NOTE: value yang telah mendapatkan pasangan tidak boleh dipasangkan lagi dengan yang lainnya

  Contoh:
  input:

  [
    ['a', 'b', 'c'],
    ['d', 'a', 'z'],
    ['a', 'z', 'f']
  ]

  output:
    2

  penjelasan: karena terdapat a dan a, kemudian z dan z


  contoh 2:
  input:
  [
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6]
  ]

  output:
    10

  penjelasan:
  - pair pertama: 2 dan 2
  - pair ke-2: 2 dan 2
  - pair ke-3: 3 dan 3
  - pair ke-4: 3 dan 3
  - pair ke-5: 4 dan 4
  .
  .
  .
  .dst

**/

function findPair(array) {
  let combinedArr = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      combinedArr.push(array[i][j]);
    }
  }
  for (let i = 0; i < combinedArr.length; i++) {
    for (let j = 0; j < combinedArr.length; j++) {
      if (i !== j && combinedArr[i] !== '' && combinedArr[j] !== '') {
        if (combinedArr[i] === combinedArr[j]) {
          counter++;
          combinedArr[i] = '';
          combinedArr[j] = '';
        }
      }
    }
  }
  return counter;
}

console.log(findPair([
  ['a', 'b', 'c'],
  ['d', 'a', 'z'],
  ['a', 'z', 'f']
])); //2



console.log(findPair([
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6]
])); //10

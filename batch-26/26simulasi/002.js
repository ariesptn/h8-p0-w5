/**
  Diberikan sebuah function bernama indexPrima
  Function tersebut akan menerima sebuah parameter number, kemudian menghasilkan
  angka prima ke -x (sesuai yang diinput).

  Syarat dari soal ini harus menggunakan 1 function saja.

**/

function indexPrima(n) {
  if (n < 2) {
    return 0;
  }
  else if (n === 2) {
    return 1;
  }
  let counter = 1;
  let prime = 0;
  let currNumber = 3;
  while (counter < n) {
    let isPrime = true;
    for (let i = 2; i < currNumber / 2 + 1; i++) {
      if (currNumber % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      counter++;
      prime = currNumber
    }
    currNumber++;
  }
  return prime;
}

console.log(indexPrima(4)); //7
console.log(indexPrima(50)); //229
console.log(indexPrima(12)); //37

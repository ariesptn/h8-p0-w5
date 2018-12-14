/**
  Diberikan sebuah function bernama findRowPrime
  Function tersebut akan menerima sebuah parameter number.
  Function akan me-return deret prima ke berapa parameter tersebut (asumsi input
  parameter pasti bilangan prima)

  RULES
  -----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

**/

function findRowPrime(n) {
  let counter = 0;
  let primeCounter = 0;
  let current = 0;
  while (current < n) {
    if (isPrime(counter)) {
      primeCounter += 1;
      current = counter;
    }
    counter++;
  }
  return primeCounter;
}
function isPrime(n) {
  if (n <= 1) { return false; }
  else if (n === 2) { return true; }
  for (let i = 2; i <= n / 2 + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(findRowPrime(7)); //4
console.log(findRowPrime(229)); //50
console.log(findRowPrime(37)); //12

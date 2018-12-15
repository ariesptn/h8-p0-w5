//SHOPPING TIME TUGAS;

function shoppingTime(memberId, money) {
  if (memberId === '' || memberId === undefined || money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  let products = [['sepatuStacattu', 1500000],
  ['bajuZoro', 500000],
  ['bajuHN', 250000],
  ['sweaterUniklooh', 175000],
  ['casingHandphone', 50000]]

  let result = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money
  }
  products.sort((a, b) => b[1] - a[1]);
  for (let a of products) {
    if (result.changeMoney >= a[1]) {
      result.listPurchased.push(a[0]);
      result.changeMoney -= a[1];
    }
  }
  if (result.listPurchased.length < 1) {
    return 'Mohon maaf, uang tidak cukup';
  } else {
    return result;
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
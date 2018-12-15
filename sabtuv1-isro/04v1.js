//TOKO X TUGAS

function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
  ];
  let result = [];
  if (shoppers.length < 1) {
    return result;
  }
  for (let l = 0; l < listBarang.length; l++) {
    result.push({
      product: listBarang[l][0],
      shoppers: [],
      leftover: listBarang[l][2],
      totalprofit: 0
    })
  }
  let resultIndex = product => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].product === product) {
        return i;
      }
    }
    return -1;
  }
  let listIndex = product => {
    for (let i = 0; i < listBarang.length; i++) {
      if (listBarang[i][0] === product) {
        return i;
      }
    }
    return -1;
  }
  for (let i = 0; i < shoppers.length; i++) {
    let ri = resultIndex(shoppers[i].product);
    let li = listIndex(shoppers[i].product);
    if (li === -1) {
      continue;
    }
    if (result[ri].leftover < shoppers[i].amount) {
      continue;
    }
    result[ri].shoppers.push(shoppers[i].name);
    result[ri].leftover -= shoppers[i].amount;
    result[ri].totalprofit += shoppers[i].amount * listBarang[li][1];
  }
  return result;
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
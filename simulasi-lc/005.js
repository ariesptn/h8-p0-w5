/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================
  author: Muhammad Ramadiansyah
  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
               yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
               ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
               sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
     angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
                      plat: 'B 1234 ABC',
                      type: 'Mobil'
                    }, {
                      plat: 'A 2457 HE',
                      type: 'Motor'
                    }, {
                      plat: 'Z 999 ERT',
                      type: 'Mobil'
                    }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil B 1234 ABC karena merupakan jenis kendaraan
  mobil dan memiliki plat genap
                    
*/

function ganjilGenapAsianGames(date, data) {
  if (date > 31) {
    return 'Invalid date'
  }
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = data[i].plat.length - 1; j >= 0; j--) {
      if (!isNaN(data[i].plat[j]) && data[i].plat[j] !== ' ') {
        if (data[i].plat[j] % 2 === date % 2 && data[i].type === 'Mobil') {
          counter++;
        }
        break;
      }
    }
  }
  return counter;
}


console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [
  {
    plat: 'A 2431 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87112 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Motor'
  }
])) // 0

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates
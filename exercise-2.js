function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    const findIndex = value => {
        for (let i = 0; i < rute.length; i++) {
            if (value === rute[i]) {
                return i;
            }
        }
    }
    let result = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        result.push(new Object());
        result[i].penumpang = arrPenumpang[i][0];
        result[i].naikDari = arrPenumpang[i][1];
        result[i].tujuan = arrPenumpang[i][2];
        let distance = findIndex(arrPenumpang[i][2]) - findIndex(arrPenumpang[i][1]);
        distance = distance >= 0 ? distance : -distance;
        result[i].bayar = distance * 2000;
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'B', 'A']]));

/*
	sebuah function arrayPanjangGanjil menerima array yang berisi string
	function ini akan mengembalikan array yang berisi data yang hanya memiliki
  jumlah karakter bernilai ganjil.

	Note:
	Wajib menggunakan metode recursive

	Contoh
	console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat']));

	Hasil
	['dua', 'empat']
*/

function arrayPanjangGanjil(datas) {
	if (datas.length === 0) {
		return [];
	} else {
		if (datas[0].length % 2 === 0) {
			datas.splice(0, 1);
			return arrayPanjangGanjil(datas);
		} else {
			let tmp = [datas[0]];
			datas.splice(0, 1);
			return tmp.concat(arrayPanjangGanjil(datas));
		}
	}
}

console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat'])); // ['dua', 'empat']
console.log(arrayPanjangGanjil(['banyak', 'jalan', 'menuju', 'roma'])) // [ 'jalan' ]
console.log(arrayPanjangGanjil(['Hab', 'geduld', 'alle', 'dinge', 'sind', 'schwierig', 'bevor', 'sie', 'leicht', 'werden'])) // [ 'Hab', 'dinge', 'schwierig', 'bevor', 'sie' ]

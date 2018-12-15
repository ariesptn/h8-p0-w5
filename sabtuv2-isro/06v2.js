/*
	sebuah function arrayPanjangGanjil menerima array yang berisi string
	function ini akan mengembalikan array yang berisi data yang hanya memiliki
  jumlah karakter bernilai ganjil.

	Note:
    Wajib menggunakan metode recursive
    Hanya boleh menggunakan LOOPING 1 kali

	Contoh
	console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat']));

	Hasil
	['dua', 'empat']
*/

function arrayPanjangGanjil(datas) {
	if (datas.length < 1) {
		return [];
	} else if (datas[0].length % 2 === 0) {
		datas.shift()
		return arrayPanjangGanjil(datas);
	} else {
		let first = [datas[0]];
		datas.shift()
		return first.concat(arrayPanjangGanjil(datas));
	}
}

console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat'])); // ['dua', 'empat']
console.log(arrayPanjangGanjil(['banyak', 'jalan', 'menuju', 'roma'])) // [ 'jalan' ]
console.log(arrayPanjangGanjil(['Hab', 'geduld', 'alle', 'dinge', 'sind', 'schwierig', 'bevor', 'sie', 'leicht', 'werden'])) // [ 'Hab', 'dinge', 'schwierig', 'bevor', 'sie' ]
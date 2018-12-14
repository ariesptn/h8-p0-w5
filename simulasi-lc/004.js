/* 
======================================
Array Mastery: The Most Frequent Item
======================================

Nama:________

[INSTRUKSI]
Function mostFrequentItem adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah item di dalam array tersebut.
Function akan mereturn nilai berupa string dengan pola:

=> nama barang(3), nama barang kedua(5), nama barang ketiga(10).

Kemudian, setiap barang yang ditampilkan harus berurut jumlahnya dari yang terkecil ke terbesar.

[CONTOH]
input: ['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus']));
output: 'samsung(1), iphone(2) , asus(4)'

*/

function mostFrequentItem(arr) {
	let dataObj = {};
	for (let i = 0; i < arr.length; i++) {
		if (dataObj[arr[i]] === undefined) {
			dataObj[arr[i]] = 1;
		} else {
			dataObj[arr[i]] += 1;
		}
	}
	let dataArr = [];
	for (s in dataObj) {
		dataArr.push([s, dataObj[s]]);
	}
	dataArr.sort((a, b) => a[1] - b[1]);
	let result = '';
	for (let i = 0; i < dataArr.length; i++) {
		result += dataArr[i][0] + '(' + dataArr[i][1] + ')';
		if (i < dataArr.length - 1) {
			result += ', '
		}
	}
	return result;
}

console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'

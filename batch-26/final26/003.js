/*
========================================
Array Mastery: The Most Favorite Actor
========================================

Function mostFavoriteActor adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah value di dalam array tersebut.

Function akan mereturn nilai berupa string dengan pola:
=> actor(jumlahVoting), actor(jumlahVoting), actor(jumlahVoting).
Kemudian, setiap actor yang ditampilkan harus berurut dari jumlah voting terbesar ke terkecil
[CONTOH]
input: ['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Minho']));
output: 'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

RULES:
 - DILARANG menggunakan function ES6 SET
 - DILARANG menggunakan built in function .map, .filter dan .reduce
*/

function mostFavoriteActor(arr) {
	let data = {};
	for (let i = 0; i < arr.length; i++) {
		if (data[arr[i]] === undefined) {
			data[arr[i]] = 1;
		} else {
			data[arr[i]] += 1;
		}
	}
	let dataArr = [];
	for (let s in data) {
		dataArr.push([s, data[s]]);
	}
	dataArr.sort((a, b) => b[1] - a[1]);
	let result = '';
	for (let i = 0; i < dataArr.length; i++) {
		result += `${dataArr[i][0]}(${dataArr[i][1]}), `;
	}
	return result.slice(0, result.length - 2);
}

console.log(mostFavoriteActor(['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Minho']));
//'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

console.log(mostFavoriteActor(['Cha Tae Hyun', 'Ha Jung Wo', 'Cha Tae Hyun', 'Ju Ji Hoon']));
// 'Cha Tae Hyun(2), Ha Jung Wo(1), Ju Ji Hoon(1)'

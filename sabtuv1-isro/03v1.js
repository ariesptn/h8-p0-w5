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
	let arrObj = {};
	for (let s of arr) {
		arrObj[s] = arrObj[s] + 1 || 1;
	}
	let arrArr = [];
	for (let s in arrObj) {
		arrArr.push([s, arrObj[s]]);
	}
	arrArr.sort((a, b) => b[1] - a[1]);
	let result = '';
	for (a of arrArr) {
		result += `${a[0]}(${a[1]}), `;
	}
	return result.substring(0, result.length - 2);
}

console.log(mostFavoriteActor(['Lee Kwang Soo', 'Lee Min Ho', 'Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain']));
//'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

console.log(mostFavoriteActor(['Cha Tae Hyun', 'Ha Jung Wo', 'Cha Tae Hyun', 'Ju Ji Hoon']));
// 'Cha Tae Hyun(2), Ha Jung Wo(1), Ju Ji Hoon(1)'
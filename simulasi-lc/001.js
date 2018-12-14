// Competencies: Mathematical Operation and Conditionals
/*
===============
Cafe Visitation
===============

Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money. Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.
Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice. Jika age 17 tahun keatas, ia hanya boleh memesan anggur.
Step 3. Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000. Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar sesuai harga minuman.
Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.". Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.

Ketentuan
=========
Diberikan variable name, age, dan money.
Dipersilahkan mengganti nilai dari 3 variable tersebut, sesuai data type yang cocok, namun dilarang mengganti nama variable.
WAJIB menggunakan Pseudocode
*/

/*PSEUDOCODE
------------
STORE 'nama' AS ANY STRING
STORE 'age' AS ANY NUMBER
STORE 'money' AS ANY NUMBER

FUNCTION pesanMinum
    IF name === '' THEN
        DISPLAY 'Anda tidak boleh masuk!'
    ELSE IF age < 17 AND money >= 50000 THEN
        DISPLAY 'Anda bisa pesan juice. Sisa uang anda: ' + (money - 50000)
    ELSE IF age >= 17 AND money >= 300000 THEN
        DISPLAY 'Anda bisa pesan anggur. Sisa uang anda: ' + (money - 300000)
    ELSE THEN
        DISPLAY 'Uang tidak cukup. Anda harus pulang.'
    END IF
END FUNCTION

RUN FUNCTION pesanMinum
*/

// SKELETON CODE (Code Sample)

var name = 'budi'; // silakan berikan nilai bebas
var age = 17; // silakan berikan nilai bebas
var money = 400000; // silakan berikan nilai bebas

// Buat code disini
function pesanMinum() {
    if (name === '') {
        return 'Anda tidak boleh masuk!';
    } else if (age < 17 && money >= 50000) {
        return 'Anda bisa pesan juice. Sisa uang anda: ' + (money - 50000);
    } else if (age >= 17 && money >= 300000) {
        return 'Anda bisa pesan anggur. Sisa uang anda: ' + (money - 300000);
    } else {
        return 'Uang tidak cukup. Anda harus pulang.';
    }
}

console.log(pesanMinum());

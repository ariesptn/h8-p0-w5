/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung 
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan 
    Golongan `brutoSalary` nya masing - masing.
    pengertian : 
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus 
    salaryNett` = `brutoSalary` - (`brutoSalary` * `Tax`) - ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) 
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya : 
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika : 
    `brutoSalary` => 9000000 keatas , maka : golongan I  
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II 
    `brutoSalary` => 3000000 - 5999999, maka : golongan III 
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar : 
    - `Tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `brutoSalary` * `Tax` 

    Golongan II
    diwajibkan membayar : 
    - `Tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `brutoSalary` * `Tax`

    Golongan III
    diwajibkan membayar :
    - `Tax` 2% dari `brutoSalary` 
    - BPJS 3% dari `brutoSalary` setelah dikurangi `brutoSalary` * `Tax`

    Golongan IV 
    diwajibkan membayar : 
    - tidak dikenakan `Tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya 
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input : 
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :  
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"


    **WAJIB MENGGUNAKAN PSEUDOCODE** 

    [YOUR PSEUDOCODE HERE]


*/

function salaryRangeCalculator(brutoSalary, months) {
    let tax = 0;
    let bpjs = 0;
    let resultText = '';
    if (brutoSalary >= 9000000) {
        tax = 0.04 * brutoSalary;
        bpjs = 0.05 * (brutoSalary - tax);
    } else if (brutoSalary >= 6000000) {
        tax = 0.03 * brutoSalary;
        bpjs = 0.04 * (brutoSalary - tax);
    } else if (brutoSalary >= 3000000) {
        tax = 0.02 * brutoSalary;
        bpjs = 0.03 * (brutoSalary - tax);
    } else if (brutoSalary >= 1000000) {
        tax = 0;
        bpjs = 0.02 * (brutoSalary - tax);
    } else {
        resultText = 'Gaji anda dibawah standard perusahaan';
    }
    let salaryNett = brutoSalary - tax - bpjs;
    let totalBPJS = bpjs * months;
    if (brutoSalary >= 1000000) {
        resultText = 'netSalary = ' + salaryNett + ', totalBPJS yang telah dibayarkan = ' + totalBPJS;
    }
    console.log(resultText);
}

salaryRangeCalculator(5000000, 3)
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000

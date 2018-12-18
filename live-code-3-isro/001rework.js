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

function salaryRangeCalculator(brutoSalary,months) {
    if(brutoSalary >= 9000000){
        var payTax = brutoSalary * 0.04;
        var payBpjs = 0.05*(brutoSalary - payTax);
    }
    else if(brutoSalary >= 6000000){
        var payTax = brutoSalary * 0.03;
        var payBpjs = 0.04*(brutoSalary - payTax);
    }
    else if(brutoSalary >= 3000000){
        var payTax = brutoSalary * 0.02;
        var payBpjs = 0.03*(brutoSalary - payTax);
    }
    else if(brutoSalary >= 1000000){
        var payTax = 0;
        var payBpjs = 0.02*(brutoSalary - payTax);
    }
    else {
        console.log("Gaji anda dibawah standard perusahaan");
        return "Gaji anda dibawah standard perusahaan"
    }
    var totalBpjs = payBpjs*months;
    var netSalary = brutoSalary - payTax - payBpjs;
    console.log('netSalary = ' + netSalary + ', totalBPJS yang telah dibayarkan = ' + totalBpjs);
    return 'netSalary = ' + netSalary + ', totalBPJS yang telah dibayarkan = ' + totalBpjs;

}

salaryRangeCalculator(5000000,3)
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000



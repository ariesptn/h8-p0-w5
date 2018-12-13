function calcAlgebra(str: string): number {
    const k = 1000
    const c = 100;
    let ans = 0;
    let currVal = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'k') {
            ans += parseInt(currVal) * k;
            currVal = '';
        } else if (str[i] === 'c') {
            ans += parseInt(currVal) * c;
            currVal = '';
        } else {
            currVal += str[i];
        }
    }
    return ans;
}

console.log(calcAlgebra('2k+3c')); //2300
console.log(calcAlgebra('7k+2c')); //7200
console.log(calcAlgebra('10k+2c')); //10200
console.log(calcAlgebra('5k')); //5000
console.log(calcAlgebra('2k-3c')); //1700

function balikKataRecursive(str) {
    let last = str[str.length - 1];
    let remaining = str.slice(0, str.length - 1);
    if (str.length === 0) {
        return '';
    } else {
        return last + balikKataRecursive(remaining);
    }
}

function palindromeRecursive(str) {
    if (str.length === 0) {
        return false;
    }
    if (str.length === 1) {
        return true;
    } else {
        if (str[0] !== str[str.length - 1]) {
            return false;
        } else {
            if (str.length === 2) {
                return true;
            } else {
                return palindromeRecursive(str.slice(1, str.length - 1));
            }
        }
    }
}

function countError(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const isAlphabet = a => {
        for (let i = 0; i < alphabet.length; i++) {
            if (a === alphabet[i]) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (isAlphabet(str[i])) {
            return countError(str.substring(0, i) + str.substring(i + 1, str.length));
        }
    }
    return str.length;
}

console.log(balikKataRecursive('hacktiv8'));

console.log(palindromeRecursive('katak'));
console.log(palindromeRecursive('active'));
console.log(palindromeRecursive('cammac'));
console.log(palindromeRecursive(''));

console.log(countError('jfisdfj*(^&*&faskfd*(&'));

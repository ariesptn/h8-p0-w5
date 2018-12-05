function lompat(arena, jumlahlompat) {
    let i = 0;
    while (i < arena.length) {
        if (arena[i] === '_') {
            i++;
        } else if (arena[i] === 'n') {
            let counterN = 0;
            while (arena[i + counterN] === 'n') {
                counterN++;
            }
            if (counterN > jumlahlompat) {
                return i;
            } else {
                i += counterN + 1;
            }
        }
    }
    return i;
}

console.log(lompat('___n__nn__', 1));
console.log(lompat('_nn___nnn__', 2));
console.log(lompat('_nnn_nnnnnn____nnnnnnn__', 6))
console.log(lompat('___nnnn_____nn___nnn__nnnnnn_', 4))

function lompat(arena, jumlahlompat) {
    let counter = 0;
    for (let i = 0; i < arena.length; i++) {
        if (arena[i] === '_') {
            counter++;
        } else if (arena[i] === 'n') {
            let counterN = 0;
            while (arena[i + counterN] === 'n') {
                counterN++;
            }
            if (counterN > jumlahlompat) {
                return counter;
            } else {
                counter += counterN;
            }
        }
    }
    return counter;
}

console.log(lompat('___n__nn__', 1));
console.log(lompat('_nn___nnn__', 2));

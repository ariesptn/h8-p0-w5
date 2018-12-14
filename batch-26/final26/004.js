/**
  Diberikan sebuah function drawTrack yang menerima 2 parameter:
  - players bertipe array multi dimensi dimana array tersebut berisi info:
    * nama player
    * posisi player
  - lengthOfTrack bertipe number dimana ini mewakilkan panjang lintasan

  Jika posisi player melebihi panjang lintasan, maka player akan ditempatkan pada
  garis finish(posisi lintasan terakhir)

  Asumsi posisi tidak pernah 0 dan angka negatif.

  Contoh hasil output bisa dilihat pada test case/driver code
**/

function drawTrack(players, lengthOfTrack) {
  let result = [];
  let track = [];
  for (let i = 0; i < lengthOfTrack; i++) {
    track.push('');
  }
  for (let i = 0; i < players.length; i++) {
    result.push([...track]);
    let position = players[i][1] < lengthOfTrack ? players[i][1] - 1 : lengthOfTrack - 1;
    result[result.length - 1][position] = players[i][0];
  }
  return result;
}

console.log(drawTrack([
  ['Lee Minho', 5],
  ['Song Joong Ki', 7]
], 15));

// [ [ '', '', '', '', 'Lee Minho', '', '', '', '', '', '', '', '', '', '' ],
//   [ '', '', '', '', '', '', 'Song Joong Ki', '', '', '', '', '', '', '', '' ] ]

console.log(drawTrack([
  ['Xavier Fox', 12],
  ['Young Fox', 11],
  ['Zen Fox', 8]
], 9));

// [ [ '', '', '', '', '', '', '', '', 'Xavier Fox' ],
//   [ '', '', '', '', '', '', '', '', 'Young Fox' ],
//   [ '', '', '', '', '', '', '', 'Zen Fox', '' ] ]

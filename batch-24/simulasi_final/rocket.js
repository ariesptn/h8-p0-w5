/*
DOMINO CARD

Buatlah sebuah function bernama domino yang menerima satu parameter berupa number. function domino akan membuat sebuah kotak dengan simbol # dengan panjang dan tinggi sesuai number parameter. Kemudian, di bagian paling tengah dari kotak dituliskan kembali simbol # sepanjang sizenya dan setelah kotak terbagi dua maka di masing-masing sub kotak pada bagian tengahnya dituliskan angka domino.

NOTE ANGKA YANG BERADA DITENGAH SUB KOTAK ADALAH ANGKA RANDOM DARI ANGKA DOMINO (1-6)

Contoh untuk input 9:

#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
Contoh untuk input 10:

##########
#        #
#    6   #
#        #
##########
##########
#        #
#    2   #
#        #
##########
*/

function domino(size) {
  let result = ''
  for (let i = 0; i < size; i++) {
    result += '#'
    for (let j = 0; j < size - 2; j++) {
      if (i === 0 || i === size - 1 || i === Math.floor(size / 2) || i === size - Math.floor(size / 2) - 1) {
        result += '#'
      } else if ((i === Math.floor(size / 4) || i === Math.floor(size * 3 / 4)) && j === Math.floor(size / 2) - 1) {
        result += Math.floor(Math.random() * 6) + 1
      } else {
        result += ' '
      }
    }
    result += '#\n'
  }
  console.log(result)
}

domino(9);
/*
NOTE: angka di dalam domino bisa berbeda
#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
*/

domino(12);
/*
NOTE: angka di dalam domino bisa berbeda
############
#          #
#    5     #
#          #
#          #
############
############
#          #
#    1     #
#          #
#          #
############
*/

domino(10);
/*
NOTE: angka di dalam domino bisa berbeda
##########
#        #
#    6   #
#        #
##########
##########
#        #
#    6   #
#        #
##########
*/

domino(21);
/*
NOTE: angka di dalam domino bisa berbeda
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
*/

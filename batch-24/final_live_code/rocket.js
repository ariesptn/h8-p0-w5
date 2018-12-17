/**
  **********
  HOURGLASS
  **********

  Buatlah sebuah function bernama hourglass. Function hourglass adalah sebuah
  function yang menerima sebuah parameter berupa number dengan asumsi nilai
  parameternya minimal 3. Function akan mereturn string yang memiliki element
  di dalamnya berupa simbol '#' yang nantinya berbentuk jam pasir/hourglass.


  RULES:
**/

function hourglass(num) {
  if (num < 3) {
    return 'Minimum parameter is 3'
  }
  let result = ''
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num * 2 - 1; j++) {
      if (j >= i && j < num * 2 - 1 - i) {
        result += '#'
      } else {
        result += ' '
      }
    }
    result += '\n'
  }
  for (let i = num - 2; i >= 0; i--) {
    for (let j = 0; j < num * 2 - 1; j++) {
      if (j >= i && j < num * 2 - 1 - i) {
        result += '#'
      } else {
        result += ' '
      }
    }
    result += '\n'
  }
  return result
}
console.log(hourglass(2)); //Minimum parameter is 3

console.log(hourglass(4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

console.log(hourglass(5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/

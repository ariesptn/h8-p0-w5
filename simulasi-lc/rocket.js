function nextTargetArea(code) {
  let test = '';
  let result = 0;
  while (true) {
    test = replaceMatch(code, 'TWO');
    if (code !== test) {
      code = test
      result += 2;
      continue;
    }
    test = replaceMatch(code, 'THREE');
    if (code !== test) {
      code = test
      result += 3;
      continue;
    }
    test = replaceMatch(code, 'FOUR');
    if (code !== test) {
      code = test
      result += 4;
      continue;
    }
    test = replaceMatch(code, 'SIX');
    if (code !== test) {
      code = test
      result += 6;
      continue;
    }
    test = replaceMatch(code, 'SEVEN');
    if (code !== test) {
      code = test
      result += 7;
      continue;
    }
    test = replaceMatch(code, 'EIGHT');
    if (code !== test) {
      code = test
      result += 8;
      continue;
    }
    break;
  }
  return 'District ' + result + ' is the next target!';
}

function replaceMatch(str, match) {
  let replacedStr = str.substring(0, str.length);
  for (let i = 0; i < match.length; i++) {
    if (str.indexOf(match[i]) !== -1) {
      replacedStr = replacedStr.replace(match[i], '');
    } else {
      return str;
    }
  }
  return replacedStr;
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"

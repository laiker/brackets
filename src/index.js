module.exports = function check(str, bracketsConfig) {
  var newstr = str;
  for (i = 0; i < Math.floor(str.length / 2); i++) {
    for (j = 0; j <= bracketsConfig.length - 1; j++) {
      strPair = bracketsConfig[j].join('');
      newstr = newstr.replace(strPair, '');
    }
  }
  return newstr.length == 0;
}

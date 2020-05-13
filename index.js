const _splitLines = (str) => str.split(/\r?\n/);

module.exports = (str1, str2, separator = " ") => {
  let result = [];

  let str1Array = _splitLines(str1);
  let str2Array = _splitLines(str2);

  let maxLen = Math.max(str1Array.length, str2Array.length);

  for (let row = 0; row < maxLen; row++) {
    result.push(str1Array[row] + separator + str2Array[row]);
  }
  return result.join("\r\n");
};

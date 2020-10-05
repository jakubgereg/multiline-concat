const _splitLines = (str) => str.split(/\r?\n/);
const _isEmpty = (str) => str === undefined || str === null;
const _isConcatable = (str) => str !== '' && !_isEmpty(str);

module.exports = (str1, str2, separator) => {
  let result = [];
  let str1Array = _splitLines(str1);
  let str2Array = _splitLines(str2);

  let maxNumberOfRows = Math.max(str1Array.length, str2Array.length);
  for (let row = 0; row < maxNumberOfRows; row++) {
    let row1 = str1Array[row];
    let row2 = str2Array[row];

    if(_isConcatable(row1) || _isConcatable(row2)){
      if(!_isEmpty(row1) && !_isEmpty(row2)){
        result.push(`${row1}${separator ? separator : ""}${row2}`);
      }else if(!_isEmpty(row1)){
        result.push(`${row1}${separator ? separator : ""}`)
      }else if(!_isEmpty(row2)){
        result.push(`${separator ? separator : ""}${row2}`)
      }
    }else{
      //makes no sense to concate empty newlines together and wasting concat separator (just add empty line)
      result.push('');
    }
  }
  return result.join("\r\n");
};

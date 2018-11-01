
function repeatedWord(str) {
    // let arr = str.split(' ')
    let arr = str.split(/[\., ]/)
    let obj = {}

    for(let i = 0 ; i < arr.length ; i++) {
        if(!obj[arr[i]]) {
          obj[arr[i]] = 1;
        } else {
          return arr[i];
        }
      }
    return 'There are no duplicate words in this string.';
}

module.exports = repeatedWord;
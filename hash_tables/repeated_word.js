
function repeatedWord(str) {
    // console.log('what up')
    let newStr = str.split(' ')
    let obj = {}

    for(let i = 0; i < newStr.length;i++) {
        if(newStr[i] === obj[newStr[i]]) {
            return newStr[i]
        } else {
            obj[newStr[i]] = 1
            console.log(obj)
        }
    };
}

module.exports = repeatedWord;
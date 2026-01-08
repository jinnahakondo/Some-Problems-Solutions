const getPlainDrome = (wrod) => {
    let reversedWord = wrod.split('').reverse().join('')

    if (wrod === reversedWord) {
        return true;
    }
    else {
        return false;
    }
}

console.log(getPlainDrome("hello"));
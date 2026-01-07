// Reverse a String

const reverseString1 = (str) => {
    const reversedStr = str.split('').reverse().join('')
    return reversedStr;
}



const reverseString2 = (str) => {
    let reversedStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i]
    }

    return reversedStr;
}


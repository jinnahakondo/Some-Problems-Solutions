// function 1
const capitalizeFirstLetter2 = (sentence) => {
    const sentenceArr = sentence.split(' ')
    let capitalized = '';
    for (const word of sentenceArr) {
        const wordArr = word.split('')
        wordArr[0] = word[0].toUpperCase();
        capitalized = capitalized + wordArr.join('') + ' '
    }
    return capitalized;
}



// function 2 
const capitalizeFirstLetter = (sentence) => {
    const sentenceArr = sentence.split(' ')
    let capitalizedSentence = '';
    for (word of sentenceArr) {
        capitalizedSentence = capitalizedSentence + word[0].toUpperCase() + word.slice(1) + ' '
    }
    return capitalizedSentence;
}


const capitalizeFirstLetter = (sentence) => {
    const sentenceArr = sentence.split(' ')
    let capitalizedSentence = '';
    for (word of sentenceArr) {
        capitalizedSentence = capitalizedSentence + word[0].toUpperCase() + word.slice(1) + ' '
    }
    return capitalizedSentence;
}
console.log(capitalizeFirstLetter('hello world'));
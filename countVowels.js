// programming
const countVowels = (vowel) => {
    let count = 0;
    for (c of vowel) {
        if (c === 'a' || c === 'e' || c === 'i' || c === "o" || c === 'u') {
            count = count + 1;
        }
    }
    return count;
}

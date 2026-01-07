const findEvenNumber = (numbers) => {
    const evenNumbers = [];
    for (const n of numbers) {
        if (n % 2 === 0) {
            evenNumbers.push(n)
        }
    }
    return evenNumbers;
}

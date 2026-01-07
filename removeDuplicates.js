// function 1 
const removeDuplicateNumber = (numbers) => {
    let uniqeNumbers = [];
    for (const n of numbers) {
        if (!uniqeNumbers.includes(n)) {
            uniqeNumbers.push(n)
        }
    }
    return uniqeNumbers.sort((a, b) => a - b);
}

// function 2 
const removeDuplicateNumber2 = (numbers) => {
    const uniqeNumbers = new Set(numbers)
    return [...uniqeNumbers].sort((a, b) => a - b);
}

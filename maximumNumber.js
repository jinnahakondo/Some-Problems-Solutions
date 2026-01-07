//  1 
const maxNumber = (arr) => {
    return Math.max(...arr);
}

// 2 
const maxNumber2 = (numbers) => {
    let maxNumber = 0;
    for (const n of numbers) {
        if (n > maxNumber) {
            maxNumber = n;
        }
    }
    return maxNumber;
}


// function 1 
const maxNumber = (numbers) => {
    return Math.max(...numbers);
}

//function 2 
const maxNumber2 = (numbers) => {
    let maxNumber = 0;
    for (const n of numbers) {
        if (n > maxNumber) {
            maxNumber = n;
        }
    }
    return maxNumber;
}


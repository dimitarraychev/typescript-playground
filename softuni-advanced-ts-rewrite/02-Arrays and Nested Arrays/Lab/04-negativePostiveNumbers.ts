function negativePositiveNumbers(inputArr: number[]): void {

    let result: number[] = [];

    inputArr.forEach(element => {
        element < 0 ? result.unshift(element) : result.push(element);
    });

    for (const element of result) {
        console.log(element);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);
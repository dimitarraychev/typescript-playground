function sortingNumbers(numbersArr: number[]): number[] {

    const sortedArr: number[] = numbersArr.sort((a, b) => a - b);
    const length: number = sortedArr.length / 2;
    let result: number[] = [];

    for (let index = 0; index < length; index++) {
        const firstEl = sortedArr.shift();
        const lastEl = sortedArr.pop();

        if (firstEl != undefined && lastEl != undefined) {
            result.push(firstEl, lastEl);
        }
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
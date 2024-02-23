function processOldPositions(inputArr: number[]): void {

    const result: string = inputArr.filter((el, index) => index % 2 !== 0)
        .map(el => el *= 2)
        .reverse()
        .join(' ');

    console.log(result);
}

processOldPositions([10, 15, 20, 25]);
function biggestElement(inputMatrix: number[][]): void {

    let maxNum: number = Number.MIN_SAFE_INTEGER;

    for (const arr of inputMatrix) {
        let arrMax: number = arr.reduce((a, b) => Math.max(a, b));

        if (arrMax > maxNum) maxNum = arrMax;
    }

    console.log(maxNum);
}

biggestElement([[20, 50, 10],
[8, 33, 145]]);
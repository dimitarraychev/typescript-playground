function magicMatrices(inputMatrix: number[][]): boolean {

    const length: number = inputMatrix.length;
    let isSame: boolean = false;
    let currColIndex: number = 0;

    for (let index = 0; index < length - 1; index++) {
        let currArr: number[] = inputMatrix[index];
        let nextArr: number[] = inputMatrix[index + 1];
        let currArrSum: number = currArr.reduce((acc, el) => acc + el);
        let nextArrSum: number = nextArr.reduce((acc, el) => acc + el);

        currArrSum === nextArrSum ? isSame = true : isSame = false;

        let currColSum: number = 0;
        let nextColSum: number = 0;

        for (let j = 0; j < length; j++) {
            let currColDigit: number = inputMatrix[j][currColIndex];
            let nextColDigit: number = inputMatrix[j][currColIndex + 1];

            currColSum += currColDigit;
            nextColSum += nextColDigit;
        }

        currColIndex++;

        currColSum === nextColSum ? isSame = true : isSame = false;
    }

    return isSame;
}

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
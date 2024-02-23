function extractIncreasingSubsequenceFromArray(numbersArr: number[]): number[] {

    let biggestNum: number = Number.MIN_SAFE_INTEGER;

    let result: number[] = numbersArr.reduce((acc: number[], el) => {

        if (el >= biggestNum) {
            biggestNum = el;

            acc.push(el);
        }

        return acc;
    }, []);

    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
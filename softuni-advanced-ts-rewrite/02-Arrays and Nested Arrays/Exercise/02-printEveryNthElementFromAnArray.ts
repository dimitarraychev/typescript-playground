function printEveryNthElementFromAnArray(inputArr: string[], step: number): string[] {

    const result: string[] = inputArr.filter((el, index) => index === 0 || index % step === 0);

    return result;
}

console.log(printEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2));
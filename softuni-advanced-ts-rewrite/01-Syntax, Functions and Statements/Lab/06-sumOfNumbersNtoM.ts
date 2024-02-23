function sumOfNumbersNtoM(n: string, m: string): void {

    let sum: number = 0;

    for (let i = +n; i <= +m; i++) {
        sum += i;
    }

    console.log(sum);
}

sumOfNumbersNtoM('1', '5');
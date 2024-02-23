function sameNumbers(num: number): void {

    let str: string = num.toString();
    let firstChr: string = str[0];
    let sum: number = 0;
    let isSame: boolean = true;

    for (const char of str) {
        sum += +char;

        if (char !== firstChr) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
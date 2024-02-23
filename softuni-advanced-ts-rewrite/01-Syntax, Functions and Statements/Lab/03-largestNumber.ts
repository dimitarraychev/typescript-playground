function largestNumber(num1: number, num2: number, num3: number): void {

    let largestNum: number = Math.max(num1, num2, num3);

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16);
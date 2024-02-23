function greatestCommonDivisor(num1: number, num2: number): void {

    let gcd: number = num1 % num2;

    while (gcd !== 0) {
        num1 = num1;
        num2 = gcd;
        gcd = num1 % num2;
    }

    console.log(num2);
}

greatestCommonDivisor(15, 5);
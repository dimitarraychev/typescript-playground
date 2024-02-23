type Operator = '+' | '-' | '*' | '/' | '%' | '**';

function mathOperations(num1: number, num2: number, operator: Operator): void {

    let result: number = 0;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
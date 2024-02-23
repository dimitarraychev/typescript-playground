type CookingOperation = 'chop' | 'dice' | 'spice' | 'bake' | 'fillet';

type OperationsObject = { [key: string]: (num: number) => number }

function cookingByNumbers(inputStr: string, ...operationsArr: CookingOperation[]) {

    let num: number = Number(inputStr);

    const operationsObj: OperationsObject = {
        'chop': num => { return num /= 2 },
        'dice': num => { return Math.sqrt(num) },
        'spice': num => { return ++num },
        'bake': num => { return num *= 3 },
        'fillet': num => { return num *= 0.8 },
    };

    operationsArr.forEach(operation => {
        num = operationsObj[operation](num);
        console.log(num);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
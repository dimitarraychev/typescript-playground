type CalorieInfo = { [key: string]: number };

function calorieObject(inputArr: string[]): void {

    let result: CalorieInfo = inputArr.reduce((acc, value, i) => {
        if (i % 2 === 0) {
            acc[value] = Number(inputArr[i + 1]);
        }
        return acc;
    }, {});

    console.log(result);
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
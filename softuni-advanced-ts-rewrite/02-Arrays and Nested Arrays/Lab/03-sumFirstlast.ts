function sumFirstLast(inputArr: string[]): void {

    let sum: number = Number(inputArr.pop()) + Number(inputArr.shift());

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);
function aggregateElements(arr: number[]): void {

    let sum = (arr: number[]): number => {
        return arr.reduce((el, sum) => sum += el);
    };

    let sumPart = (arr: number[]): number => {
        let total: number = 0;

        arr.forEach((element) => {
            total += 1 / +element;
        });

        return total;
    };

    let concat = (arr: number[]): string => {
        let result: string = '';

        arr.forEach((element) => {
            result += element;
        });

        return result;
    };

    console.log(sum(arr));
    console.log(sumPart(arr));
    console.log(concat(arr));
}

aggregateElements([1, 2, 3]);
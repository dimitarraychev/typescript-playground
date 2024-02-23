function pieceOfPie(flavorsArr: string[], target1: string, target2: string): string[] {

    const index1: number = flavorsArr.indexOf(target1);
    const index2: number = flavorsArr.indexOf(target2);

    const result: string[] = flavorsArr.slice(index1, index2 + 1);

    return result;
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
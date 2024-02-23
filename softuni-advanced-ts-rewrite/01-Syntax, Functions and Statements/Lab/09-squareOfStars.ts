function squareofStars(num: number = 5): void {

    let oneLine: string = new Array(num).fill('*').join(' ');

    for (let i = 0; i < num; i++) {
        console.log(oneLine);
    }
}

squareofStars(2);
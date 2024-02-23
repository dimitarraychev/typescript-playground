function circleArea(num: unknown): void {

    if (typeof (num) === 'number') {
        let area: number = Math.PI * num ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (num)}.`);
    }
}

circleArea(5);
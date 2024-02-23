function validityChecker(x1: number, y1: number, x2: number, y2: number): void {

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
    let distH: number = x1 - x2;
    let distY: number = y1 - y2;

    return Math.sqrt(distH ** 2 + distY ** 2);
}

validityChecker(2, 1, 1, 1);
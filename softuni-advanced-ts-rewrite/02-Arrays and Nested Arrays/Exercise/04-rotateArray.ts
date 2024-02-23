function rotateArray(inputArr: string[], rotations: number): void {

    for (let i = 0; i < rotations; i++) {
        if (inputArr.length > 0) {
            inputArr.unshift(inputArr.pop()!);
        } else {
            break;
        }
    }

    console.log(inputArr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2);
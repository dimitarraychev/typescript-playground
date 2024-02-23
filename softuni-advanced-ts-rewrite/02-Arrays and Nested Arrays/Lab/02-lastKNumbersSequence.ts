function lastKNumbersSequence(n: number, k: number): number[] {

    let outputArr: number[] = [1];

    while (outputArr.length !== n) {
        
        const nextNum: number = outputArr.slice(-k)
            .reduce((a, b) => a + b);
            
        outputArr.push(nextNum);
    }

    return outputArr;
}

console.log(lastKNumbersSequence(8, 2));
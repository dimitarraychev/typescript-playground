function wordsUppercase(inputStr: string): void {

    const pattern: RegExp = /\w+/gm;

    const match: RegExpMatchArray | null = inputStr.match(pattern);

    if (match) {
        const result: string = match.map(element => element.toUpperCase())
            .join(', ');

        console.log(result);
    }
}

wordsUppercase('Hi, how are you?');
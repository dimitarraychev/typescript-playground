function printAnArrayWithAGivenDelimiter(inputArr: string[], delimiter: string): void {

     console.log(inputArr.join(delimiter));
}

printAnArrayWithAGivenDelimiter(['One',
     'Two',
     'Three',
     'Four',
     'Five'],
     '-');
function stringLength(str1: string, str2: string, str3: string): void {

    let total: number = str1.length + str2.length + str3.length;
    let avg: number = Math.floor(total / 3);

    console.log(total);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake');
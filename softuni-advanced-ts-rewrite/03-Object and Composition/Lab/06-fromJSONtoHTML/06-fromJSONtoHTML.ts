type Person = {
    name: string;
    score: number;
    grade: number;
};

function fromJSONToHTMLTable(json: string): string {

    const arr: Person[] = JSON.parse(json);

    let resultArr: string[] = ['<table>'];

    resultArr.push(makeKeyRow(arr));
    arr.forEach(obj => resultArr.push(makeValueRow(obj)));

    resultArr.push('</table>');

    return resultArr.join('\n');
}

function makeKeyRow(arr: Person[]): string {

    let result: string = '    <tr>';
    const rows: string[] = Object.keys(arr[0]);

    rows.forEach(x => result += `<th>${escapeHtml(x)}</th>`);

    result += '</tr>';
    return result;
}

function makeValueRow(obj: Person): string {

    let result: string = '    <tr>';
    const values: (string | number)[] = Object.values(obj);

    values.forEach(value => result += `<td>${escapeHtml(value)}</td>`);

    result += '</tr>';
    return result;
}

function escapeHtml(value: string | number): string {
    const entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    return value.toString()
        .replace(/[&<>"'\/]/g, (s) => entityMap[s]);
}

// fromJSONToHTMLTable('[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]');
// console.log(fromJSONToHTMLTable(`[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]`));
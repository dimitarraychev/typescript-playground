function previousDay(year: number, month: number, day: number): string {

    let date: Date = new Date(year, month - 1, day - 1);

    let outputYear: number = date.getFullYear();
    let outputMonth: number = date.getMonth() + 1;
    let outputDay: number = date.getDate();

    return `${outputYear}-${outputMonth}-${outputDay}`;
}

previousDay(2016, 9, 30);
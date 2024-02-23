function daysInAMonth(month: number, year: number): number {

    let date: Date = new Date(year, month, 0);

    return date.getDate();
}

daysInAMonth(3, 2024);
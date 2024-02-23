class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: string, status: string) {
        this.destination = destination;
        this.price = Number.parseFloat(price);
        this.status = status;
    }
}

function tickets(inputArr: string[], sortCriteria: string): Ticket[] {

    let ticketsArr: Ticket[] = [];

    for (const line of inputArr) {
        const [destination, price, status] = line.split('|');
        const ticket: Ticket = new Ticket(destination, price, status);
        
        ticketsArr.push(ticket);
    }

    return ticketsArr.sort((a, b) => {
        return sortCriteria === 'price' ? a[sortCriteria] - b[sortCriteria] : a[sortCriteria].localeCompare(b[sortCriteria]);
    });
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
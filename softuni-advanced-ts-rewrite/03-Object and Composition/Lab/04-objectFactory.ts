type OrderWithFunction = {
    name: string;
} & {
    [key: string]: Function;
};

function factory(library: FunctionsLibrary, orders: Order[]): OrderWithFunction[] {

    const result: OrderWithFunction[] = [];

    for (const order of orders) {

        const current = { ...order.template } as OrderWithFunction;

        for (const part of order.parts) {
            current[part] = library[part];
        }

        result.push(current);
    }

    return result;
}

type FunctionsLibrary = {
    print: () => void;
    scan: () => void;
    play: (artist: string, track: string) => void;
};

const library: FunctionsLibrary = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

type Order = {
    template: {
        name: string;
    };
    parts: string[];
};

const orders: Order[] = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);
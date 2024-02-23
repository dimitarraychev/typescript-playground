class Hex {
    constructor(public value: number) {
        this.value = value;
    }

    valueOf(): number {
        return this.value;
    }

    toString(): string {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(value: Hex): Hex {
        return new Hex(this.value + value.valueOf());
    }

    minus(value: Hex): Hex {
        return new Hex(this.value - value.valueOf());
    }

    parse(hex: string): number {
        return parseInt(hex, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
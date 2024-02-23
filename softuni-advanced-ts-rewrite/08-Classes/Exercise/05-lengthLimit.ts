class Stringer {
    innerString: string;
    innerLength: number;

    constructor(string: string, length: number) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase = function (num: number) {
        return this.innerLength += num;
    };

    decrease = function (num: number) {
        return this.innerLength - num >= 0 ? this.innerLength -= num : this.innerLength = 0;
    };

    toString = function (): string {
        if (Number(this.innerString.length) > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        }

        return this.innerString;
    };
}

const test = new Stringer("Test", 5);

console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
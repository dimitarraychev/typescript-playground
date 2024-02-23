class List {
    list: number[];
    size: number;

    constructor() {
        this.list = [];
        this.size = 0;
    }

    add = function (num: number): void {
        this.size++;
        this.list.push(num);

        return this.list.sort((a: number, b: number) => a - b);
    };

    remove = function (num: number): void {
        this.size--;

        return this.list.splice(num, 1);
    };

    get = function (num: number): void {
        return this.list[num];
    };
}

const list = new List();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
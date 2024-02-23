type SortedList = {
    list: number[];
    add: (el: number) => void;
    remove: (el: number) => void;
    get: (el: number) => void;
    size: number;
};

function createSortedList(): SortedList {

    const sortedList: SortedList = {
        list: [],

        add: function (element) {
            this.list.push(element);
            this.size++;

            return this.list.sort((a: number, b: number) => a - b);
        },

        remove: function (index) {
            if (index >= 0 && index < this.size) {
                this.list.splice(index, 1);
                this.size--;

                return this.list.sort((a: number, b: number) => a - b);
            }
        },

        get: function (index) {
            if (index >= 0 && index < this.size) {
                return this.list[index];
            }
        },

        size: 0
    };

    return sortedList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
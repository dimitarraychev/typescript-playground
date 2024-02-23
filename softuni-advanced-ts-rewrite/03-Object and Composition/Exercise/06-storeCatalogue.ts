type Products = { [key: string]: string };

function storeCatalogue(inputArr: string[]): void {

    let firstLetters: string[] = [];
    let productsObj: Products = {};

    for (const row of inputArr) {
        let [product, price] = row.split(' : ');
        productsObj[product] = price;

        if (!firstLetters.includes(product[0])) {
            firstLetters.push(product[0]);
        }
    }

    let sortedArr: string[] = firstLetters.sort();

    for (const letter of sortedArr) {

        let productsArr: string[] = [];

        for (const key in productsObj) {
            if (key[0] === letter) {
                productsArr.push(key);
            }
        }

        console.log(letter);

        productsArr.sort((a, b) => a.localeCompare(b))
            .forEach(el => console.log(`  ${el}: ${productsObj[el]}`));
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
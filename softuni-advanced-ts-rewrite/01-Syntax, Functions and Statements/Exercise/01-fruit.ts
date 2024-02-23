function fruit(fruit: string, grams: number, pricePerKg: number): void {

    let weight: number = grams / 1000;
    let price: number = weight * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
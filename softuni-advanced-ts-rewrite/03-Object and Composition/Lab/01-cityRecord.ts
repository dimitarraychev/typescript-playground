type CityObject = {
    name: string;
    population: number;
    treasury: number;
}

function cityRecord(name: string, population: number, treasury: number): CityObject {

    const cityObj: CityObject = { name, population, treasury };

    return cityObj;
}

console.log(cityRecord('Tortuga',
    7000,
    15000));
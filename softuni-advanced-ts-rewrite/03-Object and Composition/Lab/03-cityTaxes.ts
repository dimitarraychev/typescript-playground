type CityObject = {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes: () => void;
    applyGrowth: (percentage: number) => void;
    applyRecession: (percentage: number) => void;
};

function cityTaxes(name: string, population: number, treasury: number): CityObject {

    const cityObj = { name, population, treasury } as CityObject;

    cityObj.taxRate = 10;

    cityObj.collectTaxes = () => {
        cityObj.treasury += Math.floor(cityObj.population * cityObj.taxRate);
    };

    cityObj.applyGrowth = (percentage) => {
        cityObj.population += Math.floor(cityObj.population * (percentage / 100));
    };

    cityObj.applyRecession = (percentage) => {
        cityObj.treasury -= Math.floor(cityObj.treasury * (percentage / 100));
    };

    return cityObj;
}

const city = cityTaxes('Tortuga',
    7000,
    15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
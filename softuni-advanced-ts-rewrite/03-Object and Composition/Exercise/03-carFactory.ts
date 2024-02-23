const enginesEnum = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 }
};

type CarBeforeProduction = {
    model: string;
    power: number;
    color: string;
    carriage: string;
    wheelsize: number;
};

type CarAfterProduction = {
    model: string;
    engine: {
        power: number;
        volume: number;
    };
    carriage: {
        type: string;
        color: string;
    };
    wheels: number[];
};

function carFactory(car: CarBeforeProduction): CarAfterProduction {

    const result = {
        model: car.model
    } as CarAfterProduction;

    if (car.power <= 90) {
        result.engine = enginesEnum.small;
    } else if (car.power <= 120) {
        result.engine = enginesEnum.normal;
    } else {
        result.engine = enginesEnum.monster;
    }

    result.carriage = {
        type: car.carriage,
        color: car.color
    }

    car.wheelsize % 2 !== 0 ? result.wheels = new Array(4).fill(car.wheelsize) : result.wheels = new Array(4).fill(car.wheelsize - 1);

    return result;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
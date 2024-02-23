type LimitsObject = {
    motorway: number;
    interstate: number;
    city: number;
    residential: number;
    calculate: (limit: number, speed: number) => string;
};

function roadRadar(speed: number, area: string): string {

    const limitsObj: LimitsObject = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
        calculate: (limit, speed) => {
            let status: string = '';

            if (speed <= limit) {
                return `Driving ${speed} km/h in a ${limit} zone`;
            } else {
                let difference: number = speed - limit;

                if (difference <= 20) status = 'speeding';
                else if (difference <= 40) status = 'excessive speeding';
                else status = 'reckless driving';

                return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
            }
        }
    }

    return limitsObj.calculate(limitsObj[area], speed);
}

roadRadar(40, 'city');
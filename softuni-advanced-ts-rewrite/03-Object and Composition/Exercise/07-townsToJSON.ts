function towns(array: string[]): void {
    class Town {
        constructor(public name: string, public latitude: string, public longitude: string) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    const result: string[] = [];

    for (let i = 1; i < array.length; i++) {

        const arr: string[] = array[i].split("|");
        const name: string = arr[1].trim();

        const latitude: string = (+arr[2].trim()).toFixed(2);
        const longitude: string = (+arr[3].trim()).toFixed(2);

        const town: Town = new Town(name, latitude, longitude);

        const townForJSON = {
            Town: town.name,
            Latitude: town.latitude,
            Longitude: town.longitude
        }

        const objectToJSON = JSON.stringify(townForJSON, function (key, value) {
            if (key == "Latitude") {
                return Number(value);
            } else if (key == "Longitude") {
                return Number(value);
            } else {
                return value;
            }
        });

        result.push(objectToJSON);
    }

    console.log("[" + result.join(",") + "]");
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
type AssemblyLine = {
    hasClima: (obj: Car) => void;
    hasAudio: (obj: Car) => void;
    hasParktronic: (obj: Car) => void;
};

type Car = {
    make: string;
    model: string;
    temp: number;
    tempSettings: number;
    currentTrack: {
        name: string,
        artist: string,
    };
    adjustTemp: () => void;
    nowPlaying: () => void;
    checkDistance: (distance: number) => void;
};

function createAssemblyLine(): AssemblyLine {

    let result: AssemblyLine = {

        hasClima: (obj: Car) => {
            obj.temp = 21;
            obj.tempSettings = 21;

            obj.adjustTemp = () => {
                if (obj.temp < obj.tempSettings) {
                    obj.temp += 1;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp -= 1;
                }
            }
        },

        hasAudio: (obj: Car) => {
            obj.currentTrack = {
                name: '',
                artist: '',
            };

            obj.nowPlaying = () => {
                if (obj.currentTrack.name !== '' && obj.currentTrack.artist !== '') {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            };
        },

        hasParktronic: (obj: Car) => {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    };

    return result;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
} as Car;

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
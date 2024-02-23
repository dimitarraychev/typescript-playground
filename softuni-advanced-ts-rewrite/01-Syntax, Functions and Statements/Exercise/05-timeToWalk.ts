
function timeToWalk(steps: number, length: number, kmPerHour: number): void {

    let meters: number = steps * length;
    let mPerSec: number = kmPerHour / 3.6;
    let timeInSec: number = meters / mPerSec;
    let breaktimeInSec: number = Math.floor(meters / 500) * 60;
    timeInSec += breaktimeInSec;

    let hours: string = (Math.floor(timeInSec / 3600)).toString();
    let minutes: string = (Math.floor(timeInSec / 60)).toString();
    let seconds: string = (Math.round(timeInSec % 60)).toString();

    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
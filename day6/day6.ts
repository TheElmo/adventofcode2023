const fs = require('fs');

function solveForinput(input: string)
{
    const [timeString, distanceString] = input.split('\n');

    const maxTime = convertStringToNumberArray(timeString).reduce((carry, curr) => parseInt(`${carry}${curr}`));
    const distanceRecord = convertStringToNumberArray(distanceString).reduce((carry, curr) => parseInt(`${carry}${curr}`));

    let waysToBeat = 0;

    for (let time=1; time<maxTime; time++) {
        if (getDistance(maxTime, time) > distanceRecord) {
            waysToBeat++;
        }
    }

    return waysToBeat;
}


function getDistance(maxTime: number, time: number)
{
    return maxTime*time - Math.pow(time, 2);
}

function convertStringToNumberArray(string: string) {
    const splitString = string.split(' ');
    return  splitString.map(numberAsString => {
        const number = parseInt(numberAsString.trim());
        return isNaN(number) ? null : number;
    }).filter(item => item !== null) as number[];
}

const input = fs.readFileSync('./day6/input.txt', 'utf8');

console.log(solveForinput(input));

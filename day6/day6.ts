const fs = require('fs');

function solveForinput(input: string)
{
    const [timeString, distanceString] = input.split('\n');

    const times = convertStringToNumberArray(timeString);
    const distances = convertStringToNumberArray(distanceString);

    const answersForRace = [];

    for(let index=0; index<times.length; index++) {
        let waysToBeat = 0;
        const maxTime = times[index];
        const distanceRecord = distances[index];
        for (let time=1; time<maxTime; time++) {
            if (getDistance(maxTime, time) > distanceRecord) {
                waysToBeat++;
            }
        }
        answersForRace.push(waysToBeat);
    }

    return answersForRace.reduce((carry, curr) => carry * curr);
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

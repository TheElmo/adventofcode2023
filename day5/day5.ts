const fs = require('fs');

const input = fs.readFileSync('./day5/input.txt', 'utf8');

type infoMap = { sourceStart: number; destinationStart: number; range: number}

function solve(input: string) {
    const allInstructions = input.split('\n\n');
    const seeds: number[] = [];
    const seedToSoilsMap: infoMap[] = [];
    const soilToFertMap: infoMap[] = [];
    const fertToWaterMap: infoMap[] = [];
    const waterToLightMap: infoMap[] = [];
    const lightToTempMap: infoMap[] = [];
    const tempToHumMap: infoMap[] = [];
    const humToLocMap: infoMap[] = [];
    allInstructions.forEach(instruction => {
        const { type, numbers} = parseInstruction(instruction);
        if(type === 'seeds') {
            seeds.push(...(numbers as number[]));
        }

        if(type === 'seed-to-soil map') {
            seedToSoilsMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
        if(type === 'soil-to-fertilizer map') {
            soilToFertMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
        if(type === 'fertilizer-to-water map') {
            fertToWaterMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
        if(type === 'water-to-light map') {
            waterToLightMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
        if(type === 'light-to-temperature map') {
            lightToTempMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
        if(type === 'temperature-to-humidity map') {
            tempToHumMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
        if(type === 'humidity-to-location map') {
            humToLocMap.push(...buildInfoMaps(type, (numbers as number[][])));
        }
    });

    let lowestLocation: number|undefined;

    seeds.forEach(seed => {
        const loc = findLocationForSeed(seed, seedToSoilsMap, soilToFertMap, fertToWaterMap, waterToLightMap, lightToTempMap, tempToHumMap, humToLocMap);
        lowestLocation = lowestLocation !== undefined ? Math.min(lowestLocation, loc) : loc;
    })

    return lowestLocation;
}

function findLocationForSeed(seed: number, seedToSoils: infoMap[], soilToFert: infoMap[], fertToWater: infoMap[], waterToLight: infoMap[], lightToTemp: infoMap[], tempToHum: infoMap[], humToLoc: infoMap[]): number
{
    const soil = correspondsToMap(seed, seedToSoils);
    const fertilizer = correspondsToMap(soil, soilToFert);
    const water = correspondsToMap(fertilizer, fertToWater);
    const light = correspondsToMap(water, waterToLight);
    const temperature = correspondsToMap(light, lightToTemp);
    const humidity = correspondsToMap(temperature, tempToHum);
    const location = correspondsToMap(humidity, humToLoc);

    return location;
}

function correspondsToMap(inputNum: number, map: infoMap[]) {
    let destination;
    map.forEach((sourceToDestination) => {
        if (isNumberInRange(inputNum, sourceToDestination.sourceStart, sourceToDestination.range)) {
            destination = inputNum - sourceToDestination.sourceStart + sourceToDestination.destinationStart;
        }
    });
    return destination ?? inputNum;
}

function isNumberInRange(number: number, start: number, range: number) {
    return start <= number && start+range >= number;
}

function parseInstruction(instruction: string): {
    type: string;
    numbers: number[]|number[][];
} {
    const [type, ranges] = instruction.split(':');

    const numbers = ranges.split('\n').map((rangeLine) => rangeLine.split(' ').map(number => {
        const int = parseInt(number);

        return !isNaN(int) ? int : null;
    }));

    const normalizedNumbers = numbers.map(numberRange => numberRange.filter(number => number !== null)).filter(numberRange => numberRange.length > 0) as number[]|number[][];

    return {
        type,
        numbers: type === 'seeds' ? normalizedNumbers.flat(1) : normalizedNumbers
    }
}

function buildInfoMaps(type: string, numbers: number[][]): infoMap[]
{
    return numbers.map(numberMap => {
        return {
            type,
            sourceStart: numberMap[1],
            destinationStart: numberMap[0],
            range: numberMap[2]
        }
    })
}

console.log(solve(input));

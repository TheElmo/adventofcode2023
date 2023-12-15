
function parseInstructions(input: string): number[][]
{
    return input.split('\n').map(line => line !== '' ? line.split(' ').map((number) => parseInt(number)) : null).filter((line): line is number[] => line !== null);
}

const fs = require('fs');

const input = fs.readFileSync('./day9/input.txt', 'utf8');

const histories = parseInstructions(input);

function buildDiffArray(numbersList: number[]): number[]
{
    const diffArray: number[] = [];
    for(let index=0;index<numbersList.length-1;index++)
    {
        diffArray.push(numbersList[index+1] - numbersList[index]);
    }
    return diffArray;
}

function solveHistories(histories: number[][], reverse = false)
{
    const answers: number[] = [];
    histories.forEach(history => {
        const nextNumber = solveHistory(history, reverse);
        console.log(nextNumber)
        if(reverse) {
            answers.push(history[0] - nextNumber);
            return;
        }
        answers.push(history[history.length-1] + nextNumber);
    });
    console.log(answers)
    return answers;
}

function solveHistory(history: number[], reverse= false): number
{
    const diffArray = buildDiffArray(history);
    if(isAllZeroes(diffArray)) {
        return 0;
    }
    if(reverse) {
        const a = solveHistory(diffArray, reverse);
        console.log(`Returning ${diffArray[0]} - ${a} = ${diffArray[0] - a}`);
        return diffArray[0] - a;
    }
    return solveHistory(diffArray, reverse) + diffArray[diffArray.length-1];
}

function isAllZeroes(numbersList: number[]): boolean
{
    return numbersList.every((number) => number === 0);
}


console.log(solveHistories(histories, true).reduce((carry, curr) => carry + curr));

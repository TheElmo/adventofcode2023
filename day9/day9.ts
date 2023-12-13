
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

function solveHistories(histories: number[][])
{
    const answers: number[] = [];
    histories.forEach(history => {
        const nextNumber = solveHistory(history);
        answers.push(history[history.length-1] + nextNumber);
    });
    return answers;
}

function solveHistory(history: number[]): number
{
    const diffArray = buildDiffArray(history);
    console.log(diffArray)
    if(isAllZeroes(diffArray)) {
        return 0;
    }
    return solveHistory(diffArray) + diffArray[diffArray.length-1];
}

function isAllZeroes(numbersList: number[]): boolean
{
    return numbersList.every((number) => number === 0);
}


console.log(solveHistories(histories).reduce((carry, curr) => carry + curr));

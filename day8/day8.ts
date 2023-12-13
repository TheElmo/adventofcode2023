type parsedInput = {
    instructions: string[];
}

type graphNode = {
    self: string;
    leftNode: string;
    rightNode: string;
}

const nodeList: {[key: string]: graphNode} = {};

function parseInstructions(input: string): parsedInput
{
    const [instructions, graph] = input.split('\n\n');
    const graphNodes = graph.split('\n');
    graphNodes.forEach(node => {
        if(node === '') {
            return;
        }
        const [sourceNode, destinationNodes] = node.split(' = ');
        let [leftNode, rightNode] = destinationNodes.split(', ');
        leftNode = leftNode.substring(1);
        rightNode = rightNode.substring(0, rightNode.length-1);

        nodeList[sourceNode] = {
            self: sourceNode,
            leftNode,
            rightNode
        };
    });

    return {
        instructions: instructions.split('')
    }
}

function getDestination(node: graphNode, left: boolean)
{
    if(left) {
        return nodeList[node.self].leftNode;
    }
    return nodeList[node.self].rightNode;
}

function followInstructions(instructions: string[])
{
    const steps: number[] = [];
    getAllNodesWithChar('A').forEach(node => {
        console.log(node)
        steps.push(stepsForStart(node.self, instructions));
    });
    console.log(steps);
}

function getAllNodesWithChar(char: string): graphNode[]
{
    return Object.keys(nodeList)
        .filter(node => node.endsWith(char))
        .map((node) => nodeList[node]);
}

function stepsForStart(node: string, instructions: string[]): number
{
    let instructionPosition = 0;
    let zReached = false;
    let current: graphNode = nodeList[node];
    let steps = 0;
    while(!zReached) {
        if(instructionPosition >= instructions.length) {
            instructionPosition = 0
        }
        steps++;
        const instruction = instructions[instructionPosition];
        const destination = getDestination(current, instruction === 'L');
        if(destination === undefined) {
            console.error('UNDEFINED!');
            return 0;
        }
        current = nodeList[destination];

        if(current.self.endsWith('Z')) {
            console.log(`REACHED in ${steps} steps`)
            zReached = true;
            continue;
        }

        instructionPosition++;
    }

    return steps;
}

const fs = require('fs');

const input = fs.readFileSync('./day8/input.txt', 'utf8');

const map = parseInstructions(input);

followInstructions(map.instructions);

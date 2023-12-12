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
    let zReached = false;
    let instructionPosition = 0;
    let current: graphNode = nodeList['AAA'];
    let steps = 0;
    const seenNodes: {[key: string]: number[]} = {};
    while(!zReached) {
        if(instructionPosition >= instructions.length) {
            instructionPosition = 0
        }
        if(seenNodes[current.self] !== undefined) {
            seenNodes[current.self].push(instructionPosition);
            console.log(`Seen ${current.self} before now at instruction: ${instructionPosition}`)
        }
        steps++;
        const instruction = instructions[instructionPosition];
        const destination = getDestination(current, instruction === 'L');
        console.log(`At ${current.self} with instruction ${instruction}:${instructionPosition}`);
        if(destination === undefined) {
            console.error('UNDEFINED!');
            return;
        }
        current = nodeList[destination];

        if(current.self === 'ZZZ') {
            console.log(`REACHED in ${steps} steps`)
            zReached = true;
            continue;
        }

        instructionPosition++;
    }
}

const fs = require('fs');

const input = fs.readFileSync('./day8/input.txt', 'utf8');

const map = parseInstructions(input);

followInstructions(map.instructions);

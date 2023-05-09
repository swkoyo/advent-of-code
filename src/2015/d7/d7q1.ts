import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n');
const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;

const wires = new Map();

const methods = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: (a) => ~a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b
}

function parseInstruction(instruction: string) {
    const command = instruction.match(COMMAND_REGEX);
    const args = instruction.match(ARGUMENTS_REGEX);
    const destination = args.pop();

    return {
        command: command && command[0],
        args: args.map((arg) => isNaN(Number(arg)) ? arg : Number(arg)),
        destination
    }
}

function calculateWire(wireName: string) {
    const wire = wires.get(wireName);

    if (typeof wireName === 'number') return wireName;
    if (typeof wire === 'number') return wire;
    if (typeof wire === 'undefined') return undefined;

    if (!wire.command) {
        wires.set(wireName, calculateWire(wire.args[0]));
    } else {
        wires.set(wireName, methods[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])));
    }

    return wires.get(wireName);
}

input.forEach((instruction) => {
    if (instruction) {
        const parsedInstruction = parseInstruction(instruction);
        wires.set(parsedInstruction.destination, { command: parsedInstruction.command, args: parsedInstruction.args });
    }
});

console.log(calculateWire('a'));

import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n');

const lights = new Array(1000);
for (let i = 0; i < lights.length; i++) {
    lights[i] = new Array(1000).fill(0);
}

function formatInstruction(str: string): [string, [number, number], [number, number]] {
    const splitIns = str.split(' ');
    const instruction = splitIns[0] === 'turn' ? splitIns[1] : splitIns[0];
    const from = splitIns[splitIns.length - 3].split(',').map((coor) => parseInt(coor)) as [number, number];
    const to = splitIns[splitIns.length - 1].split(',').map((coor) => parseInt(coor)) as [number, number];

    return [instruction, from, to];
}

let count = 0;

for (let idx = 0; idx < input.length - 1; idx++) {
    const str = input[idx];
    const [instruction, [fromY, fromX], [toY, toX]] = formatInstruction(str);
    
    for (let i = fromY; i <= toY; i++) {
        for (let j = fromX; j <= toX; j++) {
            if (instruction === 'on') {
                count += 1;
                lights[i][j] += 1;
            } else if (instruction === 'off') {
                if (lights[i][j] > 0) {
                    count -= 1;
                    lights[i][j] -= 1;
                }
            } else {
                count += 2;
                lights[i][j] += 2; 
            }
        }
    }
}

console.log(count);

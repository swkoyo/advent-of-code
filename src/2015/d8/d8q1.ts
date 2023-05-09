import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n');

let numCharacters = 0;
let numMemory = 0;

input.forEach((str) => {
    if (str) {
        numCharacters += str.length;
        let i = 1;

        while (i < str.length - 1) {
            numMemory++;
            if (str[i] === '\\') {
                if (str[i + 1] === 'x') {
                    i += 4;
                } else {
                    i += 2;
                }
            } else {
                ++i;
            }
        }
    }
});

console.log(numCharacters - numMemory);

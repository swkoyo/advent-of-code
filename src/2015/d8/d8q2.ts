import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n');

let numCharacters = 0;
let numEncoded = 0;

input.forEach((str) => {
    if (str) {
        numCharacters += str.length;
        numEncoded += 2;
        let i = 0;
        while (i <= str.length - 1) {
            numEncoded += 1
            if (str[i] === '\\' || str[i] === '"') {
                numEncoded += 1;
            }
            ++i;
        }
    }
});

console.log(numEncoded - numCharacters);

const input = 'ckczppom';
import * as crypto from 'crypto';

const fiveZeroes = (hash: string) => {
    return hash.slice(0, 5) === '00000';
}

let counter = 0;
let hash = crypto.createHash('md5').update(`${input}${counter}`).digest('hex');

while (!fiveZeroes(hash)) {
    counter++;
    hash = crypto.createHash('md5').update(`${input}${counter}`).digest('hex');
}

console.log(counter);

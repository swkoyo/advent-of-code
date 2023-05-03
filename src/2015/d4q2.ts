const input = 'ckczppom';
import * as crypto from 'crypto';

const sixZeroes = (hash: string) => {
    return hash.slice(0, 6) === '000000';
}

let counter = 0;
let hash = crypto.createHash('md5').update(`${input}${counter}`).digest('hex');

while (!sixZeroes(hash)) {
    counter++;
    hash = crypto.createHash('md5').update(`${input}${counter}`).digest('hex');
}

console.log(counter);

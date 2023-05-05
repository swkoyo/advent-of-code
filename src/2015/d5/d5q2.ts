import * as fs from 'fs';

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8').split('\n');

// pair of any two letters without overlapping
// contains at least one letter which repeats with exactly one letter between them

function hasPairOfTwoLetters(str: string): boolean {
    let result = false;
    for (let i = 0; i < str.length - 1; i++) {
        const key = `${str[i]}${str[i + 1]}`;
        for (let j = i + 2; j < str.length - 1; j++) {
            const pair = `${str[j]}${str[j + 1]}`;
            if (key === pair) {
                result = true;
                break;
            }
        }
    }

    return result;
}

function hasBoundedRepeat(str: string): boolean {
    let result = false;
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === str[i + 2]) {
            result = true;
            break;
        }
    }

    return result;
}

const result = input.reduce((count, str) => {
    if (hasPairOfTwoLetters(str) && hasBoundedRepeat(str)) {
        return ++count;
    }
    return count;
}, 0);

console.log(result);

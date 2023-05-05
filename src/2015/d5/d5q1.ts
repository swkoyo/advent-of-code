//nice
// at least 3 vowels
// at least 1 letter that appears twice in a row
// doesn't contain an, cd, pq, or xy

import * as fs from 'fs';

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const REPEAT_CHARS = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c + c);
const INVALID_CHARS = ['ab', 'cd', 'pq', 'xy'];

function hasThreeVowels(str: string): boolean {
    return str.split('').reduce((count, c) => VOWELS.includes(c) ? ++count : count, 0) >= 3;
}

function hasRepeatChars(str: string): boolean {
    return REPEAT_CHARS.some((c) => str.includes(c));
}

function hasInvalidChars(str: string): boolean {
    return INVALID_CHARS.some((c) => str.includes(c));
}

const result = input.filter((str) => hasThreeVowels(str) && hasRepeatChars(str) && !hasInvalidChars(str))

console.log(result.length);

import { readFileSync } from 'fs'

const getLines = filename => readFileSync(filename).toString('UTF8').split('\n')

const lines = getLines('input.txt')

const digitStrings = lines.map(line => line.replace(/\D/g, '')).filter(line => !!line)

const numbers = digitStrings.map(str => Number(`${str[0]}${str[str.length -1]}`))

const answer = numbers.reduce((acc, current) => acc + current, 0)

console.log(answer)
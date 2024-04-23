const fs = require('fs')
const {readFileSync, writeFileSync} = fs

const first = readFileSync('./ler/file1.txt', 'utf8')
const second = readFileSync('./ler/file2.txt', 'utf8')
console.log(`${first} \n ${second}`)

writeFileSync('./ler/result.txt', `Aqui está o resultado:\n ${first} \n ${second}`)

console.log(fs.promises)

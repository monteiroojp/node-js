//Teste para conseguir primeiro package no node usando npm
const path = require('path');

const caminho = path.join('exercícios////', 'ex004', 'patch.js')
console.log(caminho)
console.log(path.basename(caminho))
console.log(path.resolve('exercícios', 'ex004', 'os.js'))


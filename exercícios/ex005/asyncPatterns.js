const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromisse = util.promisify(readFile)
const writeFilePromisse = util.promisify(writeFile)



const start = async () => {
    try{
        const firstFile = await readFilePromisse('exercícios/ex005/ler/file1.txt', 'utf8')
        const SecondFile = await readFilePromisse('exercícios/ex005/ler/file2.txt', 'utf8')
        writeFilePromisse('exercícios/ex005/ler/resultAsyncPattern.txt', `Seja bem vindo, este é o resultado da leitura e escrita de um arquivo por meio de um padrão assíncrono:\n ${firstFile} \n ${SecondFile} `)
        console.log('Finalizado')
    }
    catch(error){
        console.log(error)
    }
}

start()

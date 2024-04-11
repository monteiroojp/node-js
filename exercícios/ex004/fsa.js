const {readFile, writeFile} = require('fs')


const readingFile1 = (error, result, callback) =>{
    if(error){
        console.log(error)
    }
    else{
        const file1 = result
        console.log(result)
        readingFile2(file1)
    }

}

const readingFile2 = (file1) =>{
    readFile('./ler/file2.txt', 'utf8', (error, result) =>{
        if(error){
            console.log(error)
        }
        else{
            const file2 = result
            writingFile(file1, file2,)
            console.log(result);
        }
    })
    
}

const writingFile = (file1, file2,) =>{
    writeFile('./ler/resultAsync.txt', `Aqui está o resulto assincrono hahaha:\n ${file1} \n ${file2}`, (error, result) =>{
        if(error){
            console.log(error)
        }
        else{
            console.log('Arquivo criado com sucesso!')
        }
    })
}
 
readFile('./ler/file1.txt', 'utf8', readingFile1)


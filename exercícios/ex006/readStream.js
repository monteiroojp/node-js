const {createReadStream} = require('fs')

const readStream = createReadStream('exercícios/ex006/bigFile.txt', 
    {
        highWaterMark: 90000, 
        encoding: 'utf8'
    }
)

readStream.on('data', (result) =>{
    console.log(result)
})

readStream.on('error', (error) => {
    console.log('deu merda')
})
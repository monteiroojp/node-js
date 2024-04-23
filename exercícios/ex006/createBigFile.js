const  {writeFileSync} = require('fs')

for(let i = 0; i< 10000; i++){
    writeFileSync('exercícios/ex006/bigFile.txt', `hello world${i}\n`, {flag: 'a'})
}

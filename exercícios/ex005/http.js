const http = require('http')


const server = http.createServer((req, res) =>{
    console.log(req.url)
    if(req.url == '/home'){
        res.write('Bem vindo a página principal!')
        res.end()
    }
    else if(req.url == '/about'){
        res.write('Aqui contamos nossa história!')
        res.end()
    }
    else{
        res.write(
            `<h1>Oops</h1>
            <p>Aparentemente você entrou numa página inexistente</p>`
            )
        res.end()
    }
})
server.listen(80)

const http = require('http')
const {readFileSync} = require('fs')

//Get files
const homeHtml = readFileSync('navApp/index.html', 'utf8')
const homeCSS = readFileSync('navApp/styles.css', 'utf8')
const homeJS = readFileSync('navApp/browser-app.js')
const homeLogo = readFileSync('navApp/logo.svg')

const server = http.createServer((req, res) => {
    try{
        console.log(req.url)
    if(req.url == '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homeHtml)
        res.end()
    }
    else if(req.url == '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeCSS)
        res.end()
    }

    else if(req.url == '/logo.svg'){
    res.writeHead(200, {"content-type": "image/svg+xml"})
    res.write(homeLogo)
    res.end()
    }

    else if(req.url == '/browser-app.js'){
        res.writeHead(200, {"content-type": "text/javascript"})
        res.write(homeJS)
        res.end()
    }
    }
    catch(error){
        console.log(error)
    }

})

server.listen(5)

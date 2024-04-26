const express = require("express")
const app = express()
const {logger} = require('./utils')
const {authorize} = require('./authorize.js')
app.use([logger])



app.get('/', (req, res) =>{
    res.send("Home page")
    console.log(req.user)
})

app.get('/about', (req,res) =>{
    res.send("About Page")
})

app.get('/api', (req,res) =>{
    res.send('API Page')
})

app.get('/api/products', (req,res) =>{
    res.send("Products Page")
})

app.get('/api/items', (req,res) =>{
    res.send("items Page")
})



app.listen(5000, () =>{
    console.log('The server is running on port: 5000')
})


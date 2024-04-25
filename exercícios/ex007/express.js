const exp = require('constants')
const express = require('express')
const app = express()
const path = require('path')


app.use(express.static('exercícios/ex007/static'))



app.all('*', (req,res) => {
    res.status(404).send('Page not Found')
})



app.listen(5000, () => {
    console.log('The server is running on port: 5000')
})



const express = require('express')
const {people} = require('./data.js')
const {checkPeopleForm} = require('./authorize.js')

const app = express()
app.use(express.static('exercícios/ex008/methods-public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.status(200).send('<h1>Home page</h1>')
})

app.get('/api/people', (req,res) =>{
    res.status(200).json({success: true, data: people})
})

app.post('/login', checkPeopleForm, (req,res) =>{
    res.status(200).send(`Welcome ${req.body.name}`)
})


app.listen(5000, () =>{
    console.log('The server is running on port: 5000')
})


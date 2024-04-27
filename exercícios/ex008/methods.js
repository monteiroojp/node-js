const express = require('express')
const {checkPeopleForm} = require('./authorize.js')
const {peopleRoute} = require('./routes/peoplesRoute.js')

const app = express()
app.use(express.static('exercícios/ex008/methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/people', peopleRoute)

app.get('/', (req, res) =>{
    res.status(200).send('<h1>Home page</h1>')
})

app.post('/login', checkPeopleForm, (req,res) =>{
    res.status(200).send(`Welcome ${req.body.name}`)
})

app.listen(5000, () =>{
    console.log('The server is running on port: 5000')
})


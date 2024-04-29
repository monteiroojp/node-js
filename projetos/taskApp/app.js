//Criação do App
const express = require('express')
const app = express()


//dataBase
require('./dataBase/connect.js')

//Port da aplicação
const port = 5000


//Estração de dados dos requests
app.use(express.json())

//Base route
const taskRoute = require('./routes/taskRoute')
app.use('/api/v1/tasks', taskRoute)

//dbConfigs
require('dotenv').config()
const connectDB = require('./dataBase/connect.js')

//Start setup
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('CONNECTED TO DB')
        app.listen(port, () => {console.log(`The server is running on port: ${port}`)})
    } catch (error) {
        console.log(error)
    }
}

start()


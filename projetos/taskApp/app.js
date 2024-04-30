//Criação do App
const express = require('express')
const app = express()

//envDatas
require('dotenv').config()

//dataBase
require('./dataBase/connect.js')

//Port da aplicação
const port = process.env.PORT ?? 5000

//Static Files
app.use(express.static('projetos/taskApp/public'))

//Estração de dados dos requests
app.use(express.json())

//Base route
const taskRoute = require('./routes/taskRoute')
app.use('/api/v1/tasks', taskRoute)

//Nout found routes and Errors Handleling
const notFound = require('./middlewares/notFound.js')
const errorHandler = require('./middlewares/errorHandler.js')
app.use([notFound, errorHandler])

//dbConfigs
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


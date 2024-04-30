//Create app
const express = require('express')
const app = express()

//envDatas
require('dotenv').config()

//Port
const port = process.env.PORT ?? 5000 

//Extract Datas
app.use(express.json())

//Route
const productsRoute = require('./routes/productsRoute.js')
app.use('/api/v1/products', productsRoute)

//Middlewares
const notFound = require('./middlewares/notFound.js')
app.use(notFound)

//StartServer
const connectDB = require('./db/connectDB')


const start = async () => {
    const connected = await connectDB(process.env.MONGO_URI)
    if(connected){
        app.listen(port, () => console.log(`The server is running on port ${port}`))
    }
}

start()


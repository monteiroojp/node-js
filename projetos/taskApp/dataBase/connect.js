const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://monteiroojp:jP61409527@nodeprojects.bm6vdbc.mongodb.net/'

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB

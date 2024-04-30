const moongoose = require('mongoose')

const connectDB = async (uri) => {
    try{
        await moongoose.connect(uri)
        console.log('CONNECTED TO DB')
        return true
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectDB
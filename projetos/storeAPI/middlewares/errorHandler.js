//Get customErrorClass
const {customError} = require('../errors/notFoundID')


const errorHandler = (error, req, res, next) => {
    if(error instanceof customError){
        return res.status(error.statusCode).json({error: error})
    }
}
//Custom Error Classs
const {CreateCustomError} = require('../error/customError')


//Erro handler function
const errorHandler = (error, req, res, next) => {
    if(error instanceof CreateCustomError){
        return res.status(error.statusCode).json({error: error.message})
    }
    res.status(500).send('Something went wrong. Try again later. ')
}

module.exports = errorHandler
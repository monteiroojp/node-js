class CreateCustomError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}


const customError = (message, statusCode) => {
    const error = new CreateCustomError(message, statusCode)
    return error
}

module.exports = {CreateCustomError, customError}
const {BadRequestError, UnauthenticatedError} = require('../errors/index')
const jwt = require('jsonwebtoken')


const authenticateToken = (req, res, next) => {
    const authHeader = req.authorization
    
    if(!authHeader || !authHeader.startsWith('Barier null')){
        throw BadRequestError('Token was not provide!')
    }

    const token = auth.split(' ')[1]
   
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userID: payload.userID, name: payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Token is not valid!')
    }
}

module.exports = authenticateToken
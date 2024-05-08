const {Unauthorized} = require('../errors/index')
const jwt = require('jsonwebtoken')

const authenticateMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || authHeader.startsWith('Bearer null')){
        throw new Unauthorized('Must provide a token') 
    }

    const token = authHeader.split(' ')[1]
    console.log(token)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        
    } catch (error) {
        throw new Unauthorized('The token is not valid!') 
    }


    next()
}

module.exports = authenticateMiddleware
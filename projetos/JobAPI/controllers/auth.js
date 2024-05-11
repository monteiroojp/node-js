const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors/index')
const User = require('../models/User')


const register =  async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        throw new BadRequestError('Please provide all credencials!')
    }
  
    const user = await User.create(req.body)
    const token = user.createToken()

    res.status(StatusCodes.OK).json({user: {name: user.name}, token: token})
}

const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Must provide a email and password')
    }
    const user = await User.findOne({email: email})
    if(!user){
        throw new UnauthenticatedError('Invalid credentials')
    }

    const token = user.createToken()

    const isValidPassword = await user.verifyPassword(password)
    
    if(!isValidPassword){
        throw new UnauthenticatedError('Invalid credentials')
    }

    res.status(StatusCodes.OK).json({user: {name: user.name}, token: token})
}

module.exports = {
    register,
    login
}
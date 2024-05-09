const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')
const {BadRequestError} = require('../errors/index')
const jwt = require('jsonwebtoken')


const register =  async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        throw new BadRequestError('Please provide all credencials!')
    }
  
    const user = await User.create(req.body)
    const token = jwt.sign({userID: user._id, name: user.name}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(StatusCodes.CREATED).json({user: {name: user.name}, token})
}

const login = (req, res) => {
    res.send('loging user')
}

module.exports = {
    register,
    login
}
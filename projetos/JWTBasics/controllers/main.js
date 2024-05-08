const {BadRequest} = require('../errors/index')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
         throw new BadRequest('Please provide a username and password')
    }

    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '365d'})
    
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Olá ${req.user.username}`, secret: `Aqui está seu número da sorte: ${luckyNumber}`},)
}

module.exports = {
    login,
    dashboard
}
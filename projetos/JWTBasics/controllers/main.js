const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
         throw new CustomAPIError('Please provide a username and password', 400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    console.log(token)
    
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async(req, res) => {
    console.log(req.headers)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: 'Hello motherfucker, son of a bitch', secret: `This is your fuckin lucky number: ${luckyNumber}, piece of shit!`})


}

module.exports = {
    login,
    dashboard
}
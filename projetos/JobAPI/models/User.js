const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        maxLength: 50,
        minLength: 3
    },
    email: {
        type: String,
        required: [true, 'must provide a email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'must provide a password'],
        minLength: 6
    }
})

schema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

schema.methods.createToken = function () {
    return jwt.sign({userID: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

schema.methods.verifyPassword = async function (passwordFromInput) {
    return await bcrypt.compare(passwordFromInput, this.password)
}


module.exports = mongoose.model('user', schema)
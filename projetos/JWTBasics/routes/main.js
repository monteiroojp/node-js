
const express = require('express')
const router = express.Router()

//Get controllers
const {login, dashboard} = require('../controllers/main')
    

//Routes

router.route('/login').post(login)
router.route('/dashboard').get(dashboard)

module.exports = router
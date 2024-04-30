//Create route
const express = require('express')
const route = express.Router()

//Get controllers
const {getAllProducts, createProduct} = require('../controllers/productsControllers')

route.route('/').get(getAllProducts).post(createProduct)

module.exports = route
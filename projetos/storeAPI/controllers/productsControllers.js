//Get CRUD Operations
const Product = require('../db/productsScheama')

//Get all products
const getAllProducts = async (req, res, next) => {
    try{
         const product = await Product.find({})
         res.status(200).json({product})
    }
    catch(error){
        console.log(error)
    }
}

//Create Product
const createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({product})
}

module.exports = {
    getAllProducts,
    createProduct
}
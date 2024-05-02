//Get CRUD Operations
const Product = require('../db/productsScheama')
const asyncWrapper = require('../middlewares/asyncwrapper')
//Async Wrapper

//Get all products
const getAllProducts = asyncWrapper(async (req, res) => {
        const product = await Product.find({})
        res.status(200).json({product})
})

//Create Product
const createProduct = asyncWrapper(async (req, res) => {
    const product = await Product.create(req.body)
    res.status(200).json({product})
})

module.exports = {
    getAllProducts,
    createProduct
}
//Get CRUD Operations
const Product = require('../db/productsScheama')
const asyncWrapper = require('../middlewares/asyncwrapper')
//Async Wrapper

//Get all products
const getAllProducts =  asyncWrapper(async (req, res) => {
    const {featured, name, sort, select} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true'? true: false
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }

    let result = Product.find(queryObject)

    if(sort){
        const sortList = sort.split(',').join(' ') 
        result = result.sort(sortList)
    }

    if(select){
        const selectList = select.split(',').join(' ')
        result = result.select(selectList)
    }
 

    console.log(queryObject)
    const products = await result
    res.status(200).json({products})
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
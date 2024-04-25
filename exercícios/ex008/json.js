const express = require('express')
const app = express()
const {products} = require('./data')



app.get('/', (req, res) => {
    res.send('<h1> Home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products/:productID', (req, res) =>{
    const productID = Number(req.params.productID)
    const newProduct = products.filter((product) => {
        return product.id === productID
    })
    
    if(newProduct.length === 0){
        res.status(404).send('Page Not Found')
    }
    else{
        res.json(newProduct)
    }

})

app.get('/api/v1/products/search', (req,res) => {
    console.log(req.query)
    let sortedProducts = [...products]
    const {id, limit} = req.query

    if(id){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.id === Number(id)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length === 0){
        return res.json({sucsses: true, data: []})
    }
    
    res.json(sortedProducts)
    
})

app.all('*', (req, res) => {
    res.status(404).send('Page not Found')
})


app.listen(5000, () =>{
    console.log('The server is running on port: 5000')
})


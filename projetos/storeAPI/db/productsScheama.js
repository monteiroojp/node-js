const mongoose = require('mongoose')

const schema = mongoose.Schema({
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        required: [true, 'Must provide a rating'],
    },
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxLength: [20, 'Max length is 20 chars']
    },
    price: {
        type: Number,
        required: [true, 'Must provide a price']
    },
    company: {
        type: String,
        required: [true, 'Must provide a company name'],
        trim: true,
        maxLength: [20, 'Max length is 20 chars']
    }
})

module.exports = mongoose.model('product', schema)
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0.0,
    },
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxLength: [20, 'Max length is 20 chars']
    },
    price: {
        type: Number,
        required: [true, 'Must provide a name']
    },
    company: {
        type: String,
        required: [true, 'Must provide a company name'],
        trim: true,
        maxLength: [20, 'Max length is 20 chars'],
        enum: {
            values: ['kabum', 'pichau', 'amazon'],
            message: '{VALUE} não é aceito como nome de compania'
        }
    },
    createdAt: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('product', schema)
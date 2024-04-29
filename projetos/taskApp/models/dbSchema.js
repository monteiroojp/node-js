const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'must provide a name'],
            trim: true,
            maxlength: [20, 'must be less or equal to 20 chars']
        },
        completed: {
            type: Boolean,
            default: false,
        }
    }
)

module.exports = mongoose.model('task', schema)
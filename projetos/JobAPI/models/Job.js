const Mongoose = require('mongoose')

const jobSchema = new Mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Must provide a company'],
        maxLength: [50, 'Company must contain less or equal to 50 chars']
    },
    position: {
        type: String,
        required: [true, 'Must provide a position!'],
        maxLength: [100, 'Position must contain less or equal to 50 chars']
    },
    satus: {
        type: String,
        enum: {
            values: ['interview', 'declined', 'pending'],
            message: 'The status must be some of these options: interview, declined or pending'
        },
        required: true,
        default: 'pending'
    },
    createdBy: {
        type: Mongoose.Types.ObjectId,
        ref: 'user',
        required: ['true', 'Must provide a ID to create a job']
    }
}, {timestamps: true})

module.exports = Mongoose.model('job', jobSchema)
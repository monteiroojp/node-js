//Get model
const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {NotFoundError} = require('../errors/index')

const getAllJobs = async (req, res) => {
    const job = await Job.find({createdBy: req.user.userID}).sort('-createdAt')
    res.status(StatusCodes.OK).json({jobs: job, totalJobs: job.length})
}

const getSingleJob = async (req, res) => {
    const {user: {userID}, params: {id}, body} = req
    const job = await Job.findOne({_id: id, createdBy: userID})

    if(job.length == 0){
        throw new NotFoundError('There is no job with this ID')
    }

    res.status(StatusCodes.OK).json({job})
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userID
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req, res) => {
    const {user: {userID}, params: {id}} = req
    const job = await Job.findOneAndUpdate({_id: id, createdBy: userID}, req.body , {runValidators: true, new: true})

    if(job.length == 0){
        throw new NotFoundError('There is no job with this ID')
    }

    res.status(StatusCodes.OK).json({job})
}


const deleteJob = async (req, res) =>{
    const {user: {userID}, params: {id}} = req
    const job = await Job.findOneAndDelete({_id: id, createdBy: userID})

    if(job.length == 0){
        throw new NotFoundError('There is no job with this ID')
    }

    res.status(StatusCodes.OK).json({job: job, deleted: true})
}

module.exports = {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
}
//Get model
const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')

const getAllJobs = async (req, res) => {
    const job = await Job.find({createdBy: req.user.userID}).sort('-createdAt')
    res.status(StatusCodes.OK).json({jobs: job, totalJobs: job.length})
}

const getSingleJob = (req, res) => {
    res.send('Getting single job')
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userID
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = (req, res) => {
    res.send('Updating job')
}

const deleteJob = (req, res) =>{
    res.send('Deleting job')
}

module.exports = {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
}
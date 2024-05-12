//Get model
const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')

const getAllJobs = (req, res) => {
    res.send('getting all jobs')
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
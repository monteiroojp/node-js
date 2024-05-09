
const getAllJobs = (req, res) => {
    res.send('getting all jobs')
}

const getSingleJob = (req, res) => {
    res.send('Getting single job')
}

const createJob = (req, res) => {
    res.send('Creating job')
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
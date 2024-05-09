const express = require('express')
const router = express.Router()

//Get controllers
const {getAllJobs, getSingleJob, createJob, updateJob, deleteJob} = require('../controllers/jobs')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)

module.exports = router
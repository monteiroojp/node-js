//Creating route
const express = require('express')
const route = express.Router()

//Importing middlewares
const {getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask} = require('../controllers/taskControllers')

route.route('/').get(getAllTasks).post(createNewTask)
route.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


module.exports = route
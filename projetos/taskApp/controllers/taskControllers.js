//Get the CRUD
const Task = require('../models/dbSchema')

//Custom Error
const {customError} = require('../error/customError.js')

//Async Wrapper
const asyncWrapper = require('../middlewares/asyncTryandCatch.js')

//Get tasks
const getAllTasks = asyncWrapper( async (req, res) => {
        const task = await Task.find({})
        res.status(200).json({tasks: task})
})

//CreateNewTask
const createNewTask = asyncWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

//GetSingleTask

const getSingleTask = asyncWrapper( async (req, res, next) => {
    const {id} = req.params
    const task = await Task.findOne({_id: id})
    console.log(id)
    if(!task){
        return next(customError(`There is no data with this ID: ${id}`, 404))
    }
    res.status(200).json({task})
})

//updateSingleTask
const updateTask = asyncWrapper( async (req, res) => {
    const {id} = req.params
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {
        new: true,
        runValidators: true,
    })
    if(!task){
        return res.status(404).send('There is no task with this ID')
    }
    res.status(200).json({task})
})

//DeleteSingleTask
const deleteTask = asyncWrapper( async (req, res) => {
    const {id} = req.params
    const task = await Task.findOneAndDelete({_id: id})
    console.log(id)
    if(!task){
        return res.status(404).send('There is no task with this ID')
    }
    res.status(200).json({singleTask: task, deleted: true})
})

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}
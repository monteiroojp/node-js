//Get the CRUD
const Task = require('../models/dbSchema')

//Get tasks
const getAllTasks = async (req, res) => {
    try{
        const task = await Task.find({})
        res.status(200).json({tasks: task})
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error})
    }
}

//CreateNewTask
const createNewTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        console.log(error)
        res.status(500).send({msg: error})
    }
}

//GetSingleTask

const getSingleTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findOne({_id: id})
        console.log(id)
        if(!task){
            return res.status(404).send('There is no task with this ID')
        }
        res.status(200).json({task})
    } 
    catch (error) {
        console.log(error)
        res.status(500).send({msg: error})
    }
}

//updateSingleTask
const updateTask = (req, res) => {
    res.send('updating single task')
}

//DeleteSingleTask
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete({_id: id})
        console.log(id)
        if(!task){
            return res.status(404).send('There is no task with this ID')
        }
        res.status(200).json({singleTask: task, deleted: true})
    } 
    catch (error) {
        console.log(error)
        res.status(500).send({msg: error})
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}
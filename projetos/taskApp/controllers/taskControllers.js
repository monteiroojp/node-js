//Get tasks
const getAllTasks = (req, res) => {
    res.send('getting all tasks')
}

//CreateNewTask
const createNewTask = (req, res) => {
    res.json(req.body)
}

//GetSingleTask

const getSingleTask = (req, res) => {
    res.json({id: req.params.id})
}

//updateSingleTask
const updateTask = (req, res) => {
    res.send('updating single task')
}

//DeleteSingleTask
const deleteTask = (req, res) => {
    res.send('deleting single task')
}

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}
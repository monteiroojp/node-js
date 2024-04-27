const express = require('express')
const peopleRoute = express.Router()
const {getPeople, createPeople, deletePeople} = require('../controllers/controllers.js')
    
peopleRoute.route('/').get(getPeople)
peopleRoute.route('/:id').put(createPeople).delete(deletePeople)


module.exports = {peopleRoute}
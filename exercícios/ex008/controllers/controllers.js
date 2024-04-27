const {people} = require('../data.js')

const getPeople = (req,res) =>{
    res.status(200).json({success: true, data: people})
}

const createPeople = (req, res) => {
    const {id} = req.params
    const {newName} = req.body
    const checkPerson = people.find((person) => {
        return person.id === Number(id)
    })

    if(!checkPerson){
        return res.status(404).send(`It hasan't a person with a id equals to ${id}`)
    }

    else{
        if(!newName){
            return res.status(401).send("Please, send a name to the update method works!")
        }
        else{
            people.forEach((person) => {
                if(person.id === Number(id)){
                    person.name = newName
                }
            })
        
            res.status(200).json({success: true, data: people})
        }
    }
}

const deletePeople = (req, res) =>{
    const {id} = req.params
    const checkPerson = people.find((person) => {
        return person.id === Number(id)
    })

    if(!checkPerson){
        return res.status(404).send(`It hasan't a person with a id equals to ${id}`)
    }
    else{
        const newPeople = people.filter((person) => {
            return person.id !== Number(id) 
        })
        return res.status(200).json({success: true, data: newPeople})
    }

}

module.exports = {getPeople, createPeople, deletePeople}
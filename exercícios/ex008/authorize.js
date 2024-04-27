const { people } = require("./data")

const authorize = (req, res, next) =>{
    const user = req.query.user
    if(user == 'john'){
        console.log('authorized')
        req.user = {name: 'john', id: 3}
        next()
    }   
    else{
        res.status(401).send('Não autorizado')
    }
}


const checkPeopleForm = (req,res, next) =>{
    console.log(req.body)
    if(!req.body.name){
        res.status(401).json({sucsses: false, dataName: 'none'})
    }
    else{
        people.push({id: people.length + 1, name: req.body.name})
        console.log(people)
        next()
    }
}

module.exports = {authorize, checkPeopleForm}